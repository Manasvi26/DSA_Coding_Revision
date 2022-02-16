//calculate x**n

// function power(x, n) {
//   if (n === 0) {
//     return 1;
//   }

//     var prev = power(x, n - 1); //line 1

//   var result = x * prev; //line 2

//   return result; //line 3
// }

// console.log(power(2, 4));

//or

// function power(x, n) {
//   if (n === 0) {
//     return 1;
//   }

//   return x * power(x, n - 1);
// }

// console.log(power(2, 4));

function power(x, n) {
  if (n === 0) {
    return 1;
  }

  return x * power(x, n - 1);
  //   return power(x, n - 1) * x; //creates no difference
}

console.log(power(2, 4));
