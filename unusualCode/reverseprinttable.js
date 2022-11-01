function fn() {
  var n = 10;
  var a = n;
  var b = 1;

  while (a <= n) {
    while (b <= 10) {
      console.log(`${b} x ${a} = ${b * a}`);
      b++;
    }
    console.log(" ");
    a--;
    b = 1;
  }
}

fn();
