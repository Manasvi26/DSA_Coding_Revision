// var x = 10;

// function foo() {
//   console.log(x);
//   var x = 5;
//   console.log(x);
// }

// foo();

console.log(a);
var a = 5;
function a() {}
console.log(a);

//IMPORTANT TRICKY QUESTION

let a = [1, 2, [3, 4, [9, 10], 20], 100];

//CASE.1
// let b = a;

//CASE.2
// let b = [...a];

// b[0] = "abc";

b[0] = "xyz";

console.log("a --->", a);
console.log("b --->", b);
