var inner = "window";

/**
 * 全局调用 this 指向 window
 * 作用域 上找 window.inner
 */
function say() {
  console.log(inner);
  console.log(this.inner);
}

/**
 * 非箭头函数
 * 作用域 上找 obj1.inner
 * 非箭头函数调用指向调用对象 obj1
 * obj1 = {inner: "1-2", say:Function}
 */
var obj1 = (function () {
  var inner = "1-1";
  return {
    inner: "1-2",
    say: function () {
      console.log(inner);
      console.log(this.inner);
    }
  };
})();

/**
 * 箭头函数
 * 作用域 上找 obj1.inner 2-1
 * 箭头函数调用指向 window => "window"
 * obj2 = {inner: "2-2", say:Function}
 */
var obj2 = (function () {
  var inner = "2-1";
  return {
    inner: "2-2",
    say: () => {
      console.log(inner);
      console.log(this.inner);
    }
  };
})();

say();
obj1.say();
obj2.say();
/**
 *
 */
// obj1{inner:1-2 ,say()}

//作用域链，动态this的指向
obj1.say = say;
// obj1{inner:1-2 ,say() 7}
obj1.say();
/**
 *
 */
obj1.say = obj2.say;
obj1.say();

// LSH  window window 32 / 1-1 1-2 33 / 2-2 2-2 ?34 / window  1-2 35/ 2 - 1

// lwj  window window /  1-1  1-2 / 2-1 window / window 1-2/ 2-1  window

// cls: window window | 1-1 1-2 | 2-1 window| window 1-2 | 2-1 window

// 普通函数运行时确定，箭头函数编译时确定。谁调用就指向谁
