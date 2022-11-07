// didn't understood this code

var divide = function (dividend, divisor) {
  const subDivide = (a, b) => {
    let q = 0;
    let tmp = 0;
    while (tmp <= a) {
      tmp += b;
      q++;
    }
    q--;
    return [q, a - tmp + b];
  };

  let _dividend = Math.abs(dividend).toString().split("");
  let di = Math.abs(divisor);
  let _divisor = di.toString().split("");
  let tmp = "";
  let result = "";
  let flag = false;
  while (true) {
    if (!_dividend.length) {
      break;
    }
    tmp = tmp + _dividend.shift();
    let _tmp = parseInt(tmp);
    if (_tmp < di) {
      if (flag) {
        result = result + "0";
      }
    } else {
      flag = true;
      let [q, left] = subDivide(_tmp, di);
      result = result + q;
      if (left > 0) {
        tmp = left + "";
      } else {
        tmp = "";
      }
    }
  }

  let quotient = parseInt(result) || 0;
  if (quotient > 0) {
    return (dividend > 0) ^ (divisor > 0)
      ? -quotient
      : Math.min(Math.pow(2, 31) - 1, quotient);
  } else {
    return 0;
  }
};

console.log(divide(-2147483648, -1));
