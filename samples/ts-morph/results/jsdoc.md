# JSDoc 注释

- File: demo\jsdoc.ts

## 源代码片段



```ts
/**
 * 示例: JSDoc 注释
 * @packageDocumentation
 */

/** 用户实体 */
export interface DocUser {
  /** 用户 id */
  id: string;
  /** 用户名 */
  name: string;
}

/**
 * 计算加和
 * @param a 第一个数
 * @param b 第二个数
 * @returns 和
 */
export function add(a: number, b: number): number { return a + b; }

```


## 转换说明



```json
[
  {
    "kind": "InterfaceDeclaration",
    "name": "DocUser",
    "jsDocs": [
      "示例: JSDoc 注释\r\n@packageDocumentation",
      "用户实体"
    ]
  },
  {
    "kind": "FunctionDeclaration",
    "name": "add",
    "jsDocs": [
      "计算加和\r\n@param a 第一个数\r\n@param b 第二个数\r\n@returns 和"
    ]
  }
]
```
