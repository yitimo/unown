# class 定义与装饰器

- File: demo\classes.ts

## 源代码片段



```ts
/**
 * 示例: class 定义 + extends + 装饰器
 */

import { Meta, Log } from "./lib";

/** 基类 */
export class Base {
  /** jsdoc on base field */
  baseField = 0;
  /** jsdoc on base method */
  greet() { return "hi"; }
}

/**
 * 带有类装饰器与成员装饰器
 */
@Meta("DemoClass")
export class Demo extends Base {
  /** readonly prop */
  readonly id: string;

  /** 使用成员装饰器 */
  @Log()
  method(@Log() _p: number): string { return String(this.baseField); }

  constructor(id: string) {
    super();
    this.id = id;
  }
}

```


## 转换说明



```json
[
  {
    "name": "Base",
    "isExported": true,
    "decorators": [],
    "members": [
      {
        "kind": "PropertyDeclaration",
        "name": "baseField",
        "decorators": []
      },
      {
        "kind": "MethodDeclaration",
        "name": "greet",
        "decorators": []
      }
    ]
  },
  {
    "name": "Demo",
    "isExported": true,
    "extends": "Base",
    "decorators": [
      "@Meta(\"DemoClass\")"
    ],
    "members": [
      {
        "kind": "PropertyDeclaration",
        "name": "id",
        "decorators": []
      },
      {
        "kind": "MethodDeclaration",
        "name": "method",
        "decorators": [
          "@Log()"
        ]
      },
      {
        "kind": "Constructor"
      }
    ]
  }
]
```
