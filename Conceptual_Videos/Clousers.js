function a() {
  var x = 10;
  return function b() {
    return x * 100;
  };
}

const temp = a();
// console.log(temp);
// console.log(temp());

for (var index = 1; index <= 5; index++) {
  (function close(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(index);
}
