/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let index = -1;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === target) {
      index = i;
    }
    i++;
  }
  return index;
};

console.log(search([1, 2, 3, 4, 5, 6], 6));
