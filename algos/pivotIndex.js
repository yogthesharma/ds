/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const arraySum = (arr) => {
    if (!arr.length) {
      return 0;
    }
    let sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum;
  };

  const numsLength = nums.length;
  let i = numsLength - 1;

  let resIndex = -1;

  while (i >= 0) {
    const prevArr = nums.slice(0, i);
    const forArr = nums.slice(i + 1, numsLength);
    if (arraySum(prevArr) === arraySum(forArr)) {
      resIndex = i;
    }
    i -= 1;
  }
  return resIndex;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
