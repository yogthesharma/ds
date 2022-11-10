/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const newArr = nums.map((val) => Math.pow(val, 2));
  return newArr.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
