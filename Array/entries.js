/*
 * @Date: 2023-04-06 15:09:15
 * @Desc: 方法返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对
 * @Params: {}
 */

const nodeList = function (val, next) {
  this.val = val || undefined;
  this.next = next || null;
};
Array.prototype.entries = function () {
  const arr = this;
  let obj = {};
  for (let index of arr) {
    obj.next = {
      value: [index, arr[index]],
      done: index == arr.length,
    };
  }
  return node;
};
