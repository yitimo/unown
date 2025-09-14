/**
 * 示例: import/export 语法
 */

export { VERSION, Meta, Log, identity } from "./lib";

export const exportedValue = 42;

export default function exportedDefault() {
  return "ok";
}
