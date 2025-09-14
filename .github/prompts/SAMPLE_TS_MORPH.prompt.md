---
mode: agent
---
在samples/ts-morph目录下创建 ts-morph 库能力使用的示例工程:
- node脚本使用js实现, 放在 samples/ts-morph/scripts 目录下
- ts demo工程放在 samples/ts-morph/demo 目录下
- 解析结果保存在 samples/ts-morph/results 目录下
  - 使用 md 格式, 包含所有示例的转换说明
  - 包含某种示例的原始代码片段, 和转换后的字段说明

包含如下基本示例:
- import/export语法
- 变量声明
- class定义
  - 包括 extends 扩展类
  - 包括class本身的@装饰器使用
  - 包括class成员的@装饰器使用
- 函数定义
  - 包括function函数定义
  - 包括定义为常量的function函数和箭头函数
- 类型定义
  - 包括 interface, type
  - 包括组合使用各种类型的定义
- 泛型定义
- 变量、类型等的注释(jsdoc)
