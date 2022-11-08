var runningSum = function (nums) {
  let i = 0;
  const resArr = [];
  while (i < nums.length) {
    if (i === 0) {
      resArr.push(nums[i]);
    } else {
      resArr.push(nums[i] + resArr[i - 1]);
    }
    i++;
  }
  return resArr;
};

console.log(runningSum([1, 2, 3, 4]));
