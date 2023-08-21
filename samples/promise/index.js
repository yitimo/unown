
function test() {
  // return Promise.resolve(1)
  return new Promise((res) => {
    console.log('promise doing...')
    res(1)
    console.log('promise done')
  })
}
function test2() {
  // return Promise.resolve(2)
  return new Promise((res) => {
    console.log('promise doing...')
    // throw new Error('Oops...')
    res(2)
    console.log('promise done')
  })
}

function main() {
  // const cb = () => {}
  // const p1 = test()
  // const p2 = p1.then(cb)
  // const p3 = p2.then(cb)
  // p1.test = '1'
  // console.log('???', p1.test, p2.test, p3.test)
  // test().then(function (res1) {
  //   this.res1 = 'res1'
  //   console.log('then1', res1)
  //   return test2()
  // }).then(function (res2) {
  //   console.log('then2', res2, this.res1)
  //   return false
  // })
  // test2().then((res2) => {
  //   throw new Error('Oops...2')
  // }).catch((e) => {
  //   console.log('catch2', e)
  // })
  // const p1 = Promise.resolve(test)
  // const p2 = Promise.resolve(test)
  // console.log('???', p1 === test, p2 === p1, p2 === test)

  // const p = new Promise(resovle => setTimeout(() => {
  //   console.log('tick -1')
  //   resovle()
  // }));
  // Promise.resolve(p.then(() => {
  //   console.log('ticl 0')
  // })).then(() => {
  //   console.log("tick 3");
  // }).then(() => {
  //   console.log("tick 4");
  // });
  // p.then(() => {
  //   console.log("tick 1");
  // }).then(() => {
  //   console.log("tick 2");
  // }).then(() => {
  //   console.log("tick 5");
  // });

  // const p = new Promise(resovle => setTimeout(() => {
  //   console.log('tick -1')
  //   resovle()
  // }));
  // new Promise(resolve => {
  //   console.log('tick 0')
  //   resolve(p)
  // }).then(() => {
  //   console.log("tick 3");
  // }).then(() => {
  //   console.log("tick 5");
  // });
  // p.then(() => {
  //   console.log("tick 1");
  // }).then(() => {
  //   console.log("tick 2");
  // }).then(() => {
  //   console.log("tick 4");
  // });

  const emptyPromise = new Promise((res) => {
    console.log('empty doing...', 1)
    res('hi')
    setTimeout(() => {
      console.log('empty doing...', 2)
    }, 2000)
  })
  emptyPromise.then((res) => {
    console.log('??? empty then', res)
  }).catch((err) => {
    console.log('??? empty catch', err)
  }).finally(() => {
    console.log('??? empty finally')
  })
}

main()
