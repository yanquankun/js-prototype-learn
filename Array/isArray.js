/*
 * @Date: 2023-04-20 14:06:10
 * @Desc: 确定传递的值是否是一个 Array
 * @Params: {
 *  value:[]any
 * }
 */

Array.prototype.isArray = function (val) {
  return Object.prototype.toString.call(val) === "[object Array]";
};

// 下面的函数调用都返回 true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a", "b", "c", "d")));
console.log(Array.isArray(new Array(3)));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
console.log(Array.isArray(Array.prototype));

// 下面的函数调用都返回 false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray(new Uint8Array(32)));
console.log(Array.isArray({ __proto__: Array.prototype }));
