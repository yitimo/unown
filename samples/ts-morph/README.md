# ts-morph samples

一个展示 ts-morph 常见能力的最小示例工程。

- Node 脚本: `samples/ts-morph/scripts/parse.js`
- TS 示例: `samples/ts-morph/demo/**/*`
- 解析输出: `samples/ts-morph/results/*.md`

运行方式:
1. 在 `samples/ts-morph` 目录执行安装依赖。
2. 执行 `npm run generate` 生成 Markdown 结果。

输出说明:
- results/README.md: 汇总索引
- 其它 .md: 针对每类示例的原始片段 + 字段说明
