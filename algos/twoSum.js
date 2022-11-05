// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  const resArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (resArr.length >= 2) {
        break;
      }
      if (nums[i] + nums[j] === target) {
        resArr.push(+i, +j);
        break;
      }
    }
  }

  return resArr;
}

const res = twoSum([2, 7, 11, 15], 9);

console.log(res);
