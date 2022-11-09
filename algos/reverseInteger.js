/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversed = +Math.abs(x).toString().split("").reverse().join("");
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    reversed = 0;
  }

  return x < 0 ? -reversed : reversed;
};

console.log(reverse(1534236469));
