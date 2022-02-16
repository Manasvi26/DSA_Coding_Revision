function power(x, n) {
  if (n === 0) {
    return 1;
  }

  var half = power(x, n / 2);

  var result = half * half;

  if (n % 2 === 1) {
    result = result * x;
  }

  return result;
}

console.log(power(2, 4));
