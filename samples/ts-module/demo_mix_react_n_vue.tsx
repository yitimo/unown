/**
 * - 安装 @types/react, react, vue 依赖
 * - 使用 esnext 模块
 * - 试试引入 vue 依赖
 * - 改用 nodenext 模块
 * - 试试更换引入顺序
 * - 改用 react-jsx
 * - 看看 tsc 编译结果
 * - 为什么 react-jsx 不用手动引入 React 了
 */
// import { createApp } from 'vue'
import React from 'react'
// import 'vue/jsx'

function Child() {
  return <div>Child</div>
}

export function App() {
  return <Child />
}
