var n = 5;

// for (let i = n; i > 0; i--) {
//   console.log(i);
// }

function printDesendingOrder(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  return printDesendingOrder(n - 1);
}

printDesendingOrder(n);
