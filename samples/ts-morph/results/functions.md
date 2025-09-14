# 函数定义

- File: demo\functions.ts

## 源代码片段



```ts
/**
 * 示例: 函数定义
 */

/** function 声明 */
export function sum(a: number, b: number): number { return a + b; }

/** const function */
export const mul = function (a: number, b: number): number { return a * b; };

/** 箭头函数 */
export const div = (a: number, b: number): number => a / b;

/** 带默认值与可选参数 */
export function greet(name = "world", title?: string) { return `Hello ${title ?? ''}${name}`; }

```


## 转换说明



```json
[
  {
    "kind": "function",
    "name": "sum",
    "params": [
      "number",
      "number"
    ],
    "returnType": "number"
  },
  {
    "kind": "function",
    "name": "greet",
    "params": [
      "string",
      "string | undefined"
    ],
    "returnType": "string"
  },
  {
    "kind": "const-function",
    "name": "mul",
    "text": "mul = function (a: number, b: number): number { return a * b; }"
  },
  {
    "kind": "arrow-function",
    "name": "div",
    "text": "div = (a: number, b: number): number => a / b"
  }
]
```
