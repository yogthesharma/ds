const divide = function (dividend, divisior) {
  const subdivide = (a, b) => {
    let tmp = 0;
    let q = 0;

    while (tmp <= a) {
      tmp += b;
      q++;
    }
    q--;
    return [q, a - tmp + b];
  };
  let _dividend = Math.abs(dividend).toString().split("");
  let _divisior = Math.abs(divisior);

  let tmp = "";
  let result = "";
  let flag = false;

  while (true) {
    if (!_dividend.length) {
      break;
    }
    tmp = tmp + _dividend.shift();
    let _tmp = parseInt(tmp);

    if (_tmp < _divisior) {
      if (flag) {
        result = result + "0";
      }
    } else {
      flag = true;
      let [q, left] = subdivide(_tmp, _divisior);
      result = result + q;
      if (left > 0) {
        tmp = left + "";
      } else {
        tmp = 0;
      }
    }
  }

  const answer = parseInt(result) || 0;
  if (answer) {
    return (dividend > 0) ^ (divisior > 0)
      ? -answer
      : Math.min(Math.pow(2, 31) - 1, answer);
  } else {
    return 0;
  }
};

console.log(divide(50, 5));
