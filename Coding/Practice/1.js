var num = 20;

var display = function () {
  console.log("--->", num);
  var num = 10;
};

// display();

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();
// console.log(b);

//Closure ex.
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }

//   return y;
// }

// var z = x();
// 1.
// console.log(z);
//2.
// console.log(z()); //Will remember the reference even after 1000 lines of code.

//////////////////////////////////////////////////////////
// var b = 1;

// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 4;
//     console.log(b);
//   }
//   inner();
//   console.log(b);
// }

// outer();

/////////////////////////////////////////////////////////////////
// function delay(t) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, t * 1000);
//   });
// }

// async function main() {
//   console.log("hello");

//   await delay(3); //Implement delay

//   console.log("world");
// }

// main();

////////////////////////////////////////

//Question: Remove falsy value from an array.

var arr = [{}, [], undefined, null, false, true, 1, "String"];

// function removeFalsyValues(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// console.log(removeFalsyValues(arr));

// console.log(
//   arr.filter((el) => {
//     if (el) {
//       return el;
//     }
//   })
// );

// console.log(arr.filter((el) => el));

////////////////////////////////////////////////////////////////

// var obj1 = {
//   firstName: "john",
//   lastName: "doe",
// };

// var obj2 = obj1;
// var obj2 = { ...obj1 };
// obj2["firstName"] = "tony";
// console.log(obj1.firstName);
// How to avoid changing value of obj1 in above example

//Question: 0,1,2 sort.
var arr = [1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2];


function dutchNationalFlag(arr) {
  let left = 0;
  let right = arr.length - 1;
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if(element )
    
  }
}