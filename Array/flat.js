/*
 * @Date: 2023-04-20 14:12:19
 * @Desc: 创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中
 * @Params: {
 *  depth:递归深度
 * }
 */
Array.prototype.flat = function (depth) {
  const array = this;

  if (depth === -Infinity) return array;
  depth = depth || 1;

  let res = [];

  const fn = function (arr) {
    // 正无穷则忽略depth
    depth !== Infinity && depth--;

    // 空数组直接返回
    if (!arr.length) return;

    for (let i = 0; i < arr.length; i++) {
      if ((depth >= 0 || depth === Infinity) && Array.isArray(arr[i])) {
        // 递归深度合法的数组
        fn(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  };
  fn(array);

  return res;
};

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat(), arr1);
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr5.flat(-Infinity));
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
