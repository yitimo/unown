#!/usr/bin/env node
import { Project, SyntaxKind, Node, Writers } from "ts-morph";
import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wsRoot = resolve(__dirname, "..");
const demoDir = resolve(wsRoot, "demo");
const outDir = resolve(wsRoot, "results");

/** small helper */
function h1(s){ return `# ${s}`; }
function h2(s){ return `\n\n## ${s}`; }
function code(s, lang = "ts"){ return `\n\n\`\`\`${lang}\n${s}\n\`\`\`\n`; }
function section(title, body){ return `${h2(title)}\n\n${body}`; }

function write(file, content){ writeFileSync(file, content, "utf8"); }

function resetOut(){ try{ rmSync(outDir, { recursive: true, force: true }); }catch{}; mkdirSync(outDir, { recursive: true }); }

function createProject(){
  const project = new Project({ tsConfigFilePath: join(wsRoot, "tsconfig.json") });
  project.addSourceFilesAtPaths(join(demoDir, "**/*.ts"));
  return project;
}

function serializeImportExport(sf){
  const infos = [];
  sf.getStatements().forEach(st => {
    if (Node.isImportDeclaration(st)) {
      infos.push({ kind: "import", text: st.getText(), module: st.getModuleSpecifierValue() });
    } else if (Node.isExportDeclaration(st)) {
      infos.push({ kind: "export", text: st.getText(), module: st.getModuleSpecifierValue?.() });
    } else if (Node.isFunctionDeclaration(st) && st.isExported()) {
      infos.push({ kind: "export-fn", name: st.getName(), text: st.getText() });
    } else if (Node.isVariableStatement(st) && st.isExported()) {
      infos.push({ kind: "export-var", text: st.getText() });
    } else if (Node.isClassDeclaration(st) && st.isExported()) {
      infos.push({ kind: "export-class", name: st.getName(), text: st.getText() });
    }
  });
  return infos;
}

function serializeVariables(sf){
  return sf.getVariableStatements().map(vs => ({
    exported: vs.isExported(),
    declarationKind: vs.getDeclarationKind(),
    declarations: vs.getDeclarations().map(d => ({ name: d.getName(), type: d.getType().getText(), text: d.getText() }))
  }));
}

function serializeClass(c){
  return {
    name: c.getName(),
    isExported: c.isExported(),
    extends: c.getExtends()?.getText(),
    decorators: c.getDecorators().map(d=>d.getText()),
    members: c.getMembers().map(m => ({ kind: m.getKindName(), name: m.getName?.(), decorators: m.getDecorators?.().map(d=>d.getText()) }))
  };
}

function serializeClasses(sf){
  return sf.getClasses().map(serializeClass);
}

function serializeFunctions(sf){
  const fns = [];
  // function declarations
  fns.push(...sf.getFunctions().map(fn => ({ kind: "function", name: fn.getName(), params: fn.getParameters().map(p=>p.getType().getText()), returnType: fn.getReturnType().getText() })));
  // const functions & arrows
  sf.getVariableDeclarations().forEach(d => {
    const init = d.getInitializer();
    if (!init) return;
    const kind = init.getKind();
    if (kind === SyntaxKind.FunctionExpression) {
      fns.push({ kind: "const-function", name: d.getName(), text: d.getText() });
    } else if (kind === SyntaxKind.ArrowFunction) {
      fns.push({ kind: "arrow-function", name: d.getName(), text: d.getText() });
    }
  });
  return fns;
}

function serializeTypes(sf){
  const interfaces = sf.getInterfaces().map(i => ({ name: i.getName(), props: i.getProperties().map(p=>({ name: p.getName(), type: p.getType().getText() })) }));
  const types = sf.getTypeAliases().map(t => ({ name: t.getName(), type: t.getType().getText(), typeText: t.getTypeNode()?.getText() }));
  return { interfaces, types };
}

function serializeGenerics(sf){
  return {
    classes: sf.getClasses().map(c=>({ name: c.getName(), typeParams: c.getTypeParameters().map(tp=>tp.getText()) })),
    functions: sf.getFunctions().map(fn=>({ name: fn.getName(), typeParams: fn.getTypeParameters().map(tp=>tp.getText()) })),
    typeAliases: sf.getTypeAliases().map(t=>({ name: t.getName(), typeParams: t.getTypeParameters().map(tp=>tp.getText()) }))
  };
}

function serializeJsDoc(sf){
  const fromNode = n => ({ kind: n.getKindName(), name: n.getName?.(), jsDocs: n.getJsDocs?.().map(d=>d.getInnerText()) });
  const items = [];
  items.push(...sf.getInterfaces().map(fromNode));
  items.push(...sf.getFunctions().map(fromNode));
  items.push(...sf.getClasses().map(fromNode));
  items.push(...sf.getVariableDeclarations().map(fromNode));
  return items;
}

function emitMarkdown(title, sf, sections){
  const rel = relative(wsRoot, sf.getFilePath());
  let md = `${h1(title)}\n\n- File: ${rel}`;
  md += section("源代码片段", code(sf.getFullText()));
  for (const [name, value] of sections) {
    md += section(name, code(JSON.stringify(value, null, 2), "json"));
  }
  return md;
}

function main(){
  resetOut();
  const project = createProject();
  const outputs = [];

  const files = project.getSourceFiles();
  for (const sf of files) {
    const base = sf.getBaseNameWithoutExtension();
    if (base === "imports") {
      const info = serializeImportExport(sf);
      outputs.push({ name: "import-export", file: sf, content: emitMarkdown("import/export 语法", sf, [["转换说明", info]]) });
    }
    if (base === "variables") {
      const info = serializeVariables(sf);
      outputs.push({ name: "variables", file: sf, content: emitMarkdown("变量声明", sf, [["转换说明", info]]) });
    }
    if (base === "classes") {
      const info = serializeClasses(sf);
      outputs.push({ name: "classes", file: sf, content: emitMarkdown("class 定义与装饰器", sf, [["转换说明", info]]) });
    }
    if (base === "functions") {
      const info = serializeFunctions(sf);
      outputs.push({ name: "functions", file: sf, content: emitMarkdown("函数定义", sf, [["转换说明", info]]) });
    }
    if (base === "types") {
      const info = serializeTypes(sf);
      outputs.push({ name: "types", file: sf, content: emitMarkdown("类型定义", sf, [["转换说明", info]]) });
    }
    if (base === "generics") {
      const info = serializeGenerics(sf);
      outputs.push({ name: "generics", file: sf, content: emitMarkdown("泛型定义", sf, [["转换说明", info]]) });
    }
    if (base === "jsdoc") {
      const info = serializeJsDoc(sf);
      outputs.push({ name: "jsdoc", file: sf, content: emitMarkdown("JSDoc 注释", sf, [["转换说明", info]]) });
    }
  }

  // write files and index
  const index = ["# 解析结果索引", "", "包含以下示例:"];
  for (const o of outputs) {
    const outPath = join(outDir, `${o.name}.md`);
    write(outPath, o.content);
    index.push(`- ${o.name}.md`);
  }
  write(join(outDir, "README.md"), index.join("\n"));
}

main();
