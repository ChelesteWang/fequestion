function Foo(car) {
  this.bar = function () {
    this.bar = () => {
      console.log(this.car);
    };
    // 原型中赋值 this
    Foo.bar = () => {
      // this 执行时 确定为 函数体内 this
      console.log(this.car);
    };
  };
  this.car = car;
}

const m = new Foo(3);

//

m.bar();

// 不输出

m.bar();

console.log(this.car);
// 3

Foo(45);

// this 指向 window
window.bar();

Foo.bar();

// 1.new
// m.car = 3
// m.bar = function(){...}

// 2.
// const定义对象时,里面的属性还是可以改变的
// 箭头函数this指向绑定 m 对象
// m.bar = ()=>{....}
// foo.bar = () =>{....}

// 3.
// m.bar 打印3

// 4.
// Foo方法在全局环境下执行,this指向window
// window.bar = func(){...}
// window.car = 45

// 5.
// foo.bar 打印3
