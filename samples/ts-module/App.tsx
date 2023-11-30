import React from 'react'

function Child() {
  return <span>index</span>
}

export default function App() {
  return (<div>Hello <Child /></div>)
}
