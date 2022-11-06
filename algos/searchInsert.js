function searchInsert(num, target) {
  const tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (target >= arr[i - 1] && target < arr[i]) {
      tempArr.push(target);
    }
    tempArr.push(arr[i]);
  }

  if (target > tempArr[tempArr.length - 1]) {
    tempArr.push(target);
  }

  if (target < tempArr[0]) {
    tempArr.unshift(target);
  }

  return tempArr.indexOf(target);
}

console.log(searchInsert([1, 3, 5, 6], 7));
