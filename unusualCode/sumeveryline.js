// 1
// 23
// 456
// 78910
// 1112131415

function f() {
  var n, b, a;
  var count = 1;
  n = 5;
  a = 1;
  b = 1;
  var oddSum = 0;
  while (a <= n) {
    while (a >= b) {
      console.log(count); // printing all the values from here
      if (count % 2) {
        oddSum += count;
      }
      count++;
      b++;
    }
    console.log("<br>");
    b = 1;
    a++;
  }

  console.log("Odd Sum", oddSum);
}
f();

count = 4;
a = 3;
b = 1;
