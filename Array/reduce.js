/*
 * @Date: 2023-04-18 20:01:26
 * @Desc: 对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
 * @Params: {
 *   callbackFn：{
 *     @Params:{
 *          callbackpreviousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为  initialValue，否则为数组索引为 0 的元素 array[0]。
            currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
            currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。
            array：用于遍历的数组。
 *      }
 *   }
 *   initialValue:初始值
 * }
 */
const isValid = (val) => {
  return val !== null && val !== undefined;
};
Array.prototype.reduce = function (callbackFn, initialValue) {
  const arr = this;

  // 空数组或非数组兼容
  if (!Array.isArray(arr) || !arr.length) {
    // 兼容initialValue有值场景
    if (isValid(initialValue)) {
      return initialValue;
    }
    throw new Error("Error: Reduce of empty array with no initial value");
  }

  let index = 0;
  if (!isValid(initialValue)) {
    initialValue = arr[0];
    index = 1;
  }

  for (; index < arr.length; index++) {
    initialValue = callbackFn.call(null, initialValue, arr[index], index, arr);
  }

  return initialValue;
};

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([50].reduce(getMax, 10)); // 50

// callback is invoked once for element at index 1
console.log([1, 100].reduce(getMax)); // 100

// callback is not invoked
console.log([50].reduce(getMax)); // 50
console.log([].reduce(getMax, 1)); // 1

console.log([].reduce(getMax)); // TypeError
