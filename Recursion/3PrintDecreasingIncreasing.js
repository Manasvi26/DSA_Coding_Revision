var n = 5;

function PDI(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  PDI(n - 1);
  console.log(n);
}
PDI(n);
