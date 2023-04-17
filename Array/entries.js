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
  let index = 0;
  return {
    next: function () {
      // 先赋值  后自增
      const idx = index++;
      return {
        value: idx >= arr.length ? undefined : [idx, arr[idx]],
        done: idx >= arr.length,
      };
    },
  };
};

const array1 = ["a", "b", "c"];
const iterator1 = array1.entries();

const array2 = ["test1", "test2"];
const iterator2 = array2.entries();

console.log(iterator1.next());
console.log(iterator2.next());
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
console.log(iterator2.next().value);

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator2.next());
console.log(iterator2.next());
