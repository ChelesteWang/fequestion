// '123' == 123   // true
// '' == null    // false or true?
// '' == 0        // false or true?
// [] == 0        // false or true?
// [] == ''       // false or true?
// [] == ![]      // false or true?
// null == undefined //  false or true?
// Number(null)     // 返回什么？
// Number('')      // 返回什么？
// parseInt('');    // 返回什么？
// {}+10           // 返回什么？
// let obj = {
//     [Symbol.toPrimitive]() {
//         return 200;
//     },
//     valueOf() {
//         return 300;
//     },
//     toString() {
//         return 'Hello';
//     }
// }
// console.log(obj + 200);