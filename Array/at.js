/*
 * @Date: 2023-04-06 13:35:42
 * @Desc: array.at
 * 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数
 * @Params: {
 *  index
 * }
 */
Array.prototype.at = function (index) {
  // 去掉小数点
  index = Math.trunc(index) || 0;
  // 计算n的偏移量
  // eg：arr length = n
  // 1,2,3,4 第一行
  // 1,2,3,4 第二行
  // index = -1 等于从第一行走到头后从第二行的后面往前走
  if (index < 0) index += this.length;
  if (index < 0 || index >= this.length) return undefined;
  return this[index];
};

const array1 = [5, 12, 8, 130, 44];

let index = 1;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"
