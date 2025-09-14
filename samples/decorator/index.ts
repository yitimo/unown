function hello() {
  return function(target: any, key?: string, desc?: TypedPropertyDescriptor<(p: any) => number>) {
    if (desc) {
      desc.value = (p) => p + 1;
    }
    return desc
  }
}

class Test {
  name = 'test name';
  
  @hello()
  method(p: number) { return p }
}

const test = new Test();
console.log(test.method(1));
