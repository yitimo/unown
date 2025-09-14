# import/export 语法

- File: demo\imports.ts

## 源代码片段



```ts
/**
 * 示例: import/export 语法
 */

export { VERSION, Meta, Log, identity } from "./lib";

export const exportedValue = 42;

export default function exportedDefault() {
  return "ok";
}

```


## 转换说明



```json
[
  {
    "kind": "export",
    "text": "export { VERSION, Meta, Log, identity } from \"./lib\";",
    "module": "./lib"
  },
  {
    "kind": "export-var",
    "text": "export const exportedValue = 42;"
  },
  {
    "kind": "export-fn",
    "name": "exportedDefault",
    "text": "export default function exportedDefault() {\r\n  return \"ok\";\r\n}"
  }
]
```
