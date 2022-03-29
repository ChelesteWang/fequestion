// 介绍下 BFC 及其应用
// 1.解决margin塌陷问题
// 2.解决BFC内部的盒子浮动问题？不太确定
// 3.通过float开启BFC
// 4.overflow可以开启BFC

// float 会导致什么
// 1.脱离文档流，导致父元素高度塌陷
// 2.

// inline-block 有什么行为
//两个行内块叠一起，会有空格字符
//<span></span>(这里会有一个空格)
//<span></span>

function sum(a, b) {
  return a + b;
}

function sum(a, b, c) {
  return a + b + c;
}

let a = 1,
  b = 2;
c = 4;

function Foo() {}
var Foo;
var Foo = 3;
console.log(Foo);

// var gay()
// let a =1 , b =2
// funtion Scope
// 执行 a+1 b+1 clg
// 回收 funtion Scope
// test 引用存在 gay() 还被引用
// test GC

function gay() {
  let a = 1,
    b = 2;
  return function () {
    a = a + 1;
    b = b + 1;
    console.log(a, b);
  };
}

const test = gay();
console.log(test());
test = null;
console.log(test());

//.....

let map = new WeakMap();
let obj = {};
map.set(obj, 1);
obj.name = 1;
obj = null;

// 创建作用域
// 内部函数
// 函数提升，函数提升优先级高于变量提升 赋值了就被覆盖了
// var sum = function (a, b, c) {
//   return a + b + c;
// };
//  a =1 b= 2 c =3
// sum()
// 创建 子作用域 （参数，上级公有属性）Scope
// 指向 this. call apply bind
// return
// 函数作用域销毁
