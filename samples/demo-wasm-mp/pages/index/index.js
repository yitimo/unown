const app = getApp()

const BYTES_PER_PAGE = 256 * 1024 * 1024
const MAX_PAGES = 65536

Page({
  data: {

  },
  async onLoad() {
      const memory = new WXWebAssembly.Memory({ initial: 65536, maximum: MAX_PAGES })
      const target = await WXWebAssembly.instantiate('/pages/index/base64/base64.wasm', { env: { memory } })
    const wasm = target.instance.exports
    console.log('??? start')
    // const input = new Int8Array('test'.split('').map((e) => e.charCodeAt(0)))
    const input = wx.getFileSystemManager().readFileSync('/pages/index/1.gif', 'binary')
    const size = wasm.base64_encoding_length(input.length)
    const pages = memory.buffer.byteLength / BYTES_PER_PAGE
    const needed = Math.floor((memory.buffer.byteLength + size) / BYTES_PER_PAGE)
    if (size && needed > pages) {
        const needed = Math.ceil(Math.abs(size - memory.buffer.byteLength) / BYTES_PER_PAGE)
        memory.grow(Math.max(0, needed))
    }
    const heap = new Uint8Array(memory.buffer)
    const ptr = wasm.__heap_base
    const output = new Uint8Array(new ArrayBuffer(size))
    heap.set(input, ptr + size)
    wasm.base64_encode(ptr, ptr + size, input.length)
    output.set(heap.slice(ptr, ptr + size))
    let rs = ''
    for (let i = 0; i < output.byteLength; i += 1) {
        rs += String.fromCharCode(output[i])
    }
    console.log('??? result', rs)
  },
  methods: {
    downloadFile() {
        return new Promise((res) => {
            const rs = wx.getFileSystemManager().readFileSync('./1.gif', 'binary')
            // wx.downloadFile({
            //     src: '',
            //     success(res) {
                    
            //     },
            // })
        })
    }
  },
})
