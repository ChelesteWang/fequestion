// '123' == 123   // true

// '' == null    // false
// '' == undefined // false ???
// 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；
// null == undefined //  true

// '' == 0        // true?
// [] == 0        // true?
// [] == ''       // true

// 运算优先级导致 [] == false
// [] == ![]      // true ??

// Number(null)     // 0
// Number('')      // 0

// parseInt('a.000000000asdasad00000025');    // 返回什么？2.5e-
// parseInt 先把字符串转为数字（转不了NaN）精度过高会科学计数法 读取字符串的时候会从头按位读取遇到不能读取的停

// {}+10
// {} + {}

Object.prototype.valueOf.call({}, {});

Object.prototype.toString.call({}, {});

Object.prototype.toString = () => {};

// 加号转换 先转字符串

// 返回什么？
let obj = {
  //
  [Symbol.toPrimitive]() {
    return 200;
  },
  valueOf() {
    return 300;
  },
  toString() {
    return "Hello";
  }
};
console.log(obj + 200);

// 对象转换的规则，会先调用内置的 [ToPrimitive] 函数，其规则逻辑如下：

// 如果部署了 Symbol.toPrimitive 方法，优先调用再返回；

// 调用 valueOf()，如果转换为基础类型，则返回；

// 调用 toString()，如果转换为基础类型，则返回；

// 如果都没有返回基础类型，会报错。
