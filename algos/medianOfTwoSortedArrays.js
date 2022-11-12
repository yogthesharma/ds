/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const newArr = [...nums1, ...nums2];
  newArr.sort();
  let n = newArr.length;
  let med = Math.floor(n / 2);

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return newArr[n];
  }

  if (n === 2) {
    return (newArr[0] + newArr[1]) / 2;
  }

  if (n === 3) {
    return newArr[1];
  }

  if (n % 2 !== 0) {
    return newArr[med];
  } else {
    return (newArr[med - 1] + newArr[med]) / 2.0;
  }
};

console.log(findMedianSortedArrays([3], [-1, -2]));
