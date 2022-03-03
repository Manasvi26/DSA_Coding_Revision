// console.log("Start of code");

// setTimeout(() => {
//   console.log("Inside SetTimeOut 1");
// });

// setTimeout(() => {
//   console.log("Inside SetTimeOut 2");
// });

// console.log("End of code");

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

var a = 333;
console.log(a);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000);
}

for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000 * i);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 2000 * i);
}
