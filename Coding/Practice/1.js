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
// let a = [1, 2, 3, 4];
// let b = a;
// a = null;

// console.log("a --->", a);
// console.log("b --->", b);
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

// function getInfo(member, year) {
//   member.name = "Lydia";
//   year = "1998";
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear);

////////////////////

////// NOTE: //**********push() and pop() method returns length of an.*********** */

// let res = [1, 2, 3, 4];

// console.log(res.pop());
// console.log(res);

///// NOTE: //********With a for-in loop, we can iterate over enumerable properties.*********** */////////////////

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"];

// for (let item in myLifeSummedUp) {
//   console.log(item);
// }

///// NOTE: //********With a for-of loop, we can iterate over iterables. An array is an iterable..*********** */////////////////

// for (let item of myLifeSummedUp) {
//   console.log(item);
// }

///////NOTE: The value of the this keyword is dependent on where you use it. In a
// "method", like the getStatus method, the "this keyword refers
// to the object that the method belongs to".
// Inside object ---> function is refered to as "method".
//So, "this" refers to the "object".

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

//NOTE:
// The value of the this keyword is dependent on where you
// use it.In a method, like the getStatus method, the this
// keyword refers to the object that the method belongs to.

// function getName(name) {
//   const hasName = !!name;
//   console.log("hasName value --->", hasName);
// }
// console.log(getName());

///////////////////////////////////////////////////////////////

// const person = {
//   name: "John",
//   sayHello: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// person.sayHello();

//////////////////////////////////////////////////////////////

// const person = {
//   name: "John",
//   sayHello: () => console.log("Hello, " + this.name),
// };

// person.sayHello();

//Shallow copy
/////////////*****Important: From merge interval question *********/////////////////////////

// const arr = [1, 2, [3, 4]];
//Ex. 1. This will change the array. As this is shallow copy.
//Pointing to same reference after first level.
// let el = arr[2];
// el[0] = 100;
// console.log("arr --->", arr);

//Ex.2 This will "not" change the array. As this is deep copy.
//Pointing to different reference (memory location) even after first level.
// let el = [...arr[2]];
// el[0] = 100;
// console.log("arr --->", arr);

///////////////////////////////////////

function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
// console.log(sum(3)(2)(1)());

let arr = [1, 2, 3, [4, 5, [6, 7]]];

// console.log(arr.flat(4));

// let result = [];
// function flatten(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (Array.isArray(element)) {
//       flatten(element);
//     } else {
//       result.push(element);
//     }
//   }

//   return result;
// }
// console.log(flatten(arr));

//******"DEEP COPY" not flattening*********//
// console.log(JSON.parse(JSON.stringify(arr))); //this is for deep copy

//closure

function tempClose(val) {
  let a = 2; //var a = 2, or a=10, all will give same result
  return function () {
    return a * val;
  };
}

const dummy1 = tempClose(4);
const dummy2 = tempClose(10);

console.log(dummy1());
console.log(dummy2());
