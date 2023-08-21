// const data = {
//   a: 0,
//   b: false,
//   c: 'false',
// }

// const res = pick(data, 'a')

// console.log(`res: ${res}`)

// function pick(src, key) {
//   return src[key]
// }

// const data = {
//   a: 0,
//   b: false,
//   c: 'false',
// }

// const res = pick(data, 'a')

// console.log(`res: ${res}`)

// function pick(src: typeof data, key: keyof typeof data) {
//   return src[key]
// }

const data: {
  a: number,
  b: boolean,
  c: string,
  [_: string]: any,
} = {
  a: 0,
  b: false,
  c: 'false',
}

const resA = pick(data, 'a')
const resB = pick(data, 'b')
const resC = pick(data, 'c')
const resD = pick(data, 'd')

console.log(`res: ${resA}, ${resB}, ${resC}, ${resD}`)

function pick<ParentT, KeyT extends keyof ParentT>(src: ParentT, key: KeyT) {
  return src[key]
}
