# 泛型定义

- File: demo\generics.ts

## 源代码片段



```ts
/**
 * 示例: 泛型定义
 */

export class Box<T> { constructor(public value: T) {} }
export function mapBox<T, R>(b: Box<T>, f: (t: T) => R): Box<R> { return new Box(f(b.value)); }

export type Maybe<T> = T | undefined | null;

```


## 转换说明



```json
{
  "classes": [
    {
      "name": "Box",
      "typeParams": [
        "T"
      ]
    }
  ],
  "functions": [
    {
      "name": "mapBox",
      "typeParams": [
        "T",
        "R"
      ]
    }
  ],
  "typeAliases": [
    {
      "name": "Maybe",
      "typeParams": [
        "T"
      ]
    }
  ]
}
```
