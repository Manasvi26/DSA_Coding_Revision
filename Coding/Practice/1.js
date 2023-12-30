// var num = 20;

// var display = function () {
//   console.log("--->", num);
//   var num = 10;
// };

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

// var arr = [{}, [], undefined, null, false, true, 1, "String"];

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
// var arr = [1, 2, 1, 0, 2, 1, 0, 2, 1, 0, 2];

// function dutchNationalFlag(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let pointer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (element)
//       return;
//   }
// }

////////*************////VERY IMPORTANT////*******************/////////

// var arr = [{ a: 1 }, { b: 2 }];
// let arrCopy = [...arr];

// arrCopy[0].a = 10;
// arrCopy[1] = 1000;
// console.log(arr);

//////////////////////////////////////////////////////////////////////

// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

///////////////////////////////////////////////////

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

///////////////////////////////////////////////////////////

// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

/////////////////////////////////////////////////////////

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);

//////////////////////////////////////////////////////////

//1.
// let a = [1, 2, 3, 4];
// let b = a;
// b = null;
// console.log("b --->", b);
// console.log("a --->", a);
////////////////////////////////
//2.
let a = [1, 2, 3, 4];
let b = a;
a = null;

console.log("a --->", a);
console.log("b --->", b);
/////////////////////////////////
//3.
// let a = [1, 2, [3, 4]];
// let b = a;
// b[0] = null;

// console.log("a --->", a);
// console.log("b --->", b);
///////////////////////////////////
//4.
// let a = [1, 2, [3, 4]];
// let b = a;
// a[0] = null;

// console.log("a --->", a);
// console.log("b --->", b);
///////////////////////////////////////
//5.
// let a = [1, 2, [3, 4]];
// let b = [...a];
// a[0] = null;

// console.log("a --->", a);
// console.log("b --->", b);

///////////////////////////////////
//6.
// let a = [1, 2, [3, 4]];
// let b = [...a];
// b[0] = null;

// console.log("a --->", a);
// console.log("b --->", b);

//////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

//**********Arguments are passed by value, unless their
// value is an object, then they're passed by reference.*********** */

function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
