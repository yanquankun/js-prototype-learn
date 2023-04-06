/*
 * @Date: 2023-04-06 13:57:22
 * @Desc: 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
 * @Params: {
 *  valueN||null
 * }
 */
Array.prototype.concat = function () {
  // slice 深拷贝 防止修改原数组
  let arr = this.slice();
  for (const item of arguments) {
    if (item instanceof Array) {
      arr.push(...item);
    } else {
      arr.push(item);
    }
  }
  return arr;
};

var test = [1];
var res = test.concat([2], [3], 1, { a: 1 }, "1", new Date(), () => {});
console.log(test);
console.log(res);
