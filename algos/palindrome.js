function isPalindrome(x) {
  const y = +x.toString().split("").reverse().join("");
  return x === y;
}

isPalindrome(45);
