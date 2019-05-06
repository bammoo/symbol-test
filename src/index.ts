// eggjs 使用 Symbol 封装方法变量，类似于类-实例

const BAR = Symbol("Context#bar");

class a {
  get bar() {
    return BAR;
  }

  get foo() {
    const BAR = Symbol("Context#bar");
    return BAR;
  }
}

console.log(new a().bar === new a().bar);
console.log(new a().foo === new a().foo);
