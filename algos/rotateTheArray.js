/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function localReverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  localReverse(nums, 0, nums.length - 1);
  localReverse(nums, 0, k - 1);
  localReverse(nums, k, nums.length - 1);

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
