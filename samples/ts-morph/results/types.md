# 类型定义

- File: demo\types.ts

## 源代码片段



```ts
/**
 * 示例: 类型定义(interface, type) + 组合
 */

export interface User { id: string; name: string; tags?: string[]; }

export interface Admin extends User { role: "admin"; }

export type Id = string | number;

export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

export type ReadonlyRecord<K extends string, V> = { readonly [P in K]: V };

export type Func<TArgs extends any[] = any[], TRet = void> = (...args: TArgs) => TRet;

```


## 转换说明



```json
{
  "interfaces": [
    {
      "name": "User",
      "props": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "tags",
          "type": "string[] | undefined"
        }
      ]
    },
    {
      "name": "Admin",
      "props": [
        {
          "name": "role",
          "type": "\"admin\""
        }
      ]
    }
  ],
  "types": [
    {
      "name": "Id",
      "type": "import(\"C:/Users/yitimo/Personal/unown/samples/ts-morph/demo/types\").Id",
      "typeText": "string | number"
    },
    {
      "name": "Result",
      "type": "import(\"C:/Users/yitimo/Personal/unown/samples/ts-morph/demo/types\").Result<T>",
      "typeText": "{ ok: true; value: T } | { ok: false; error: string }"
    },
    {
      "name": "ReadonlyRecord",
      "type": "import(\"C:/Users/yitimo/Personal/unown/samples/ts-morph/demo/types\").ReadonlyRecord<K, V>",
      "typeText": "{ readonly [P in K]: V }"
    },
    {
      "name": "Func",
      "type": "import(\"C:/Users/yitimo/Personal/unown/samples/ts-morph/demo/types\").Func<TArgs, TRet>",
      "typeText": "(...args: TArgs) => TRet"
    }
  ]
}
```
