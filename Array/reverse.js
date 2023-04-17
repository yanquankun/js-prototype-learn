/*
 * @Date: 2023-04-17 14:14:14
 * @Desc: 将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组
 * @Params: {}
 */
Array.prototype.reverse = function () {
  const arr = this,
    position = Math.floor(this.length / 2);
  for (let i = 0; i < position; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
};

const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

const b = { 0: 1, 1: 2, 2: 3, length: 3 };

console.log(b); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(b); //same syntax for using apply()

console.log(b); // {0: 3, 1: 2, 2: 1, length: 3}
