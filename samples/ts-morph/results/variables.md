# 变量声明

- File: demo\variables.ts

## 源代码片段



```ts
/**
 * 示例: 变量声明
 */

export const a: number = 1;
export let b = "str";
export var c: boolean = true;

/** const assertion */
export const tuple = [1, "x"] as const;

/** object literal */
export const obj: { x: number; y?: string } = { x: 1 };

```


## 转换说明



```json
[
  {
    "exported": true,
    "declarationKind": "const",
    "declarations": [
      {
        "name": "a",
        "type": "number",
        "text": "a: number = 1"
      }
    ]
  },
  {
    "exported": true,
    "declarationKind": "let",
    "declarations": [
      {
        "name": "b",
        "type": "string",
        "text": "b = \"str\""
      }
    ]
  },
  {
    "exported": true,
    "declarationKind": "var",
    "declarations": [
      {
        "name": "c",
        "type": "boolean",
        "text": "c: boolean = true"
      }
    ]
  },
  {
    "exported": true,
    "declarationKind": "const",
    "declarations": [
      {
        "name": "tuple",
        "type": "readonly [1, \"x\"]",
        "text": "tuple = [1, \"x\"] as const"
      }
    ]
  },
  {
    "exported": true,
    "declarationKind": "const",
    "declarations": [
      {
        "name": "obj",
        "type": "{ x: number; y?: string | undefined; }",
        "text": "obj: { x: number; y?: string } = { x: 1 }"
      }
    ]
  }
]
```
