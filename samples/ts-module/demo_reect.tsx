/**
 * - 尝试全局使用变量 Reect
 * - 如何全局使用未安装在types的类型
 * - 尝试使用 my-view 标签
 * - 尝试把 jsx-extend 移到 reect 包里去
 * - 如何重新引入 jsx-extend 类型
*/
import React from 'react'

function App() {
    return <div>Hello</div>
}

Reect.createRoot(document.getElementById('app')!)
    .render(<App />)
