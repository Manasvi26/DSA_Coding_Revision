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

//1.
// var obj2 = obj1;
//2.
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
// console.log("arrCopy --->", arrCopy);
// console.log("arr --->", arr);

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

// var status = "Offline";

// setTimeout(() => {
//   const status = "Online";

//   const data = {
//     status: "Active",
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

// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// }
// console.log(sum(3)(2)(1)());

// let arr = [1, 2, 3, [4, 5, [6, 7]]];

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

// function tempClose(val) {
//   let a = 2; //var a = 2, or a=10, all will give same result
//   return function () {
//     return a * val;
//   };
// }

// const dummy1 = tempClose(4);
// const dummy2 = tempClose(10);

// console.log(dummy1());
// console.log(dummy2());

/////////////////////////////////////////////////////////////////////
//1.
// let a = { name: "Manasvi" };
// let b = { name: "Manasvi" };
// console.log("check --->", a === b);

//2.
// let a = { name: "Manasvi" };
// let b = a;
// b.name = "Sharma";
// console.log("check --->", a === b);
// console.log("b --->", b);
// console.log("a --->", a);

//3.
// let a = { name: "Manasvi" };
// let b = { ...a };
// b.name = "Sharma";
// console.log("check --->", a === b);
// console.log("b --->", b);
// console.log("a --->", a);

//NOTE: Primitives are compared by "value", and non-primitives
//are compared by there refernce.

///////////////////////////////////////////////////////////////////////
//1. With "await".

// (async function func(params) {
//   console.log("hello 2");

//   Promise.resolve("hello 3").then((res) => console.log(res));

//   const tempFunc = await new Promise((res, rej) => {
//     console.log("hello 4");
//     res("hello 5");
//   }).then((res) => console.log(res));

//   console.log("here --->", tempFunc);

//   setTimeout(() => {
//     console.log("hello 6");
//   }, 0);

//   console.log("hello 7");

//   return "Manasvi";
// })()
//   .then((res) => console.log("res --->", res))
//   .catch((err) => console.log("err --->", err));

////////////////////////////////////////////////////////////////////////////////////////

//Ex.2

// hello 2
// hello 4
// Promise { <pending> }
// hello 7
// hello 3
// what ? ---> hello 5
// res ---> Manasvi
// hello 6

(async function func(params) {
  console.log("hello 2");

  Promise.resolve("hello 3").then((res) => console.log(res));

  const tempFunc = new Promise((res, rej) => {
    console.log("hello 4");
    res("hello 5");
  }).then((res) => console.log("what ? --->", res));

  console.log(tempFunc);

  setTimeout(() => {
    console.log("hello 6");
  }, 0);

  console.log("hello 7");

  return "Manasvi";
})()
  .then((res) => console.log("res --->", res))
  .catch((err) => console.log("err --->", err));

///////////////////////////////////////////////////////////////////////////////////////////

//3. Without "await"

// (async function func(params) {
//   console.log("hello 2");

//   Promise.resolve("hello 3").then((res) => console.log(res)); //P1

//   new Promise((res, rej) => {
//     console.log("hello 4");
//     res("hello 5");
//   }).then((res) => console.log(res)); //P2

//   setTimeout(() => {
//     console.log("hello 6");
//   }, 0);

//   console.log("hello 7");

//   return "Manasvi";
// })()
//   .then((res) => console.log("res --->", res))
//   .catch((err) => console.log("err --->", err));

//Important NOTE: .then() is absolutely necessary to recieve the priomise. Otherwise it will remain pending.
//Important NOTE: See how setTimeout, executes even after final .then().
//Important NOTE: If our "main fuction" will not return anything, then in final .then() response will be, res ---> undefined.

//////////////////////////////////////////////////////////////

// let arr = [1, 2, 3];
// let y = arr + 1;
// console.log("y --->", y);

///////////////////////////////////////////////////////////////////////

// let x = [1, 2, 3];
// let y = [4, 5, 6];
// let z = x + y;

// console.log("--->", z);
// console.log("--->", typeof z);

/////////////////////////////////////////////////////////////////////

// let x = [1, 2, 3];
// let y = x.map((num) => {
//   x.push(num + 3);
//   return num + 1;
// });

// console.log(x);
// console.log(y);

///////////////////////////////////////////////////////////////////////

// function sum() {
//   let a = 8;
//   const b = 2;
// 1.
//   var c = a + b;
// Vs
// 2.
//   c = a + b;
// }
// console.log(a, b, c);
// sum();
// console.log(c);

///////////////////////////////////////////////////////////////////////

// console.log(0 == false);
// console.log("0" == false);
// console.log(0 === false);

////////////////////////////////////////////////////////////////////////

// console.log(Array());
// console.log(Array(3));//If integer is givin inside
// console.log([]);

///////////////////////////////////////////////////////////////////////

//Q. What is the difference between declaring a function in the two formats below?
// var foo = function() {
// /* Some code */
// };
// function bar() {
// /* Some code */
// };

//////////////////////////////////////////////////////////////////////

// console.log(typeof null);
// console.log(typeof undefined);

//////////////////////////////////////////////////////////////////////

// Object.isExtensible()

//Adding new properties: No
//Deleting new properties: Yes
//Modifying existing properties: Yes

// const studentNames = {
//   student1: "Halina",
//   student2: "Brookes",
//   student3: "Anthony",
// };

// Object.defineProperty(studentNames, "student4", {
//   value: "Mirabel",
// });

// console.log(studentNames);
//NOTE: This is not working here in NodeJs, but works fine in window (chrome)

/////////////////////////////////////////////////////////////

// const makeNonExtensive = {
//   firstname: "Charles",
//   lastname: "Chandlier",
// };

// Object.preventExtensions(makeNonExtensive);

// Object.defineProperty(makeNonExtensive, "age", {
//   value: "twenty",
// });

// console.log(makeNonExtensive);

//TypeError: Cannot define property age, object is not extensible
//NOTE: New property can't be added and will throw an error.

////////////////////////////////////////////////////////

// const makeNonExtensive = {
//   firstname: "Charles",
//   lastname: "Chandlier",
// };

// Object.preventExtensions(makeNonExtensive);

// makeNonExtensive.designation = "Software Engineer";

// console.log(makeNonExtensive);

//NOTE: New property can't be added (or defined).

////////////////////////////////////////////////////////////

// const makeNonExtensive = {
//   firstname: "Charles",
//   lastname: "Chandlier",
// };

// Object.preventExtensions(makeNonExtensive);

// Object.defineProperty(makeNonExtensive, "firstname", {
//   value: "Jason",
// });
// console.log(makeNonExtensive);

//NOTE: Value of existing property can be changed.

//////////////////////////////////////////////////////////

// const makeNonExtensive = {
//   firstname: "Charles",
//   lastname: "Chandlier",
// };

// Object.preventExtensions(makeNonExtensive);

// delete makeNonExtensive.lastname;

// console.log(makeNonExtensive);

//NOTE: By name it is clear that it prevents extensions.
//So, delete will work.

///////////////////////////////////////////////////////////////

// Object.seal()

//Adding new properties: No
//Deleting new properties: No
//Modifying existing properties: Yes

// Object.isSealed()

// All objects in Javascript are extensible by default.
// Just as the name suggests, this method seals an object.
// You cannot add new properties to a sealed object or delete
// an existing property from a sealed object.But object.

// ***** seal permits only modifying existing properties ******.

/////////////////////////////////////////////////////////////////

// Object.freeze()

//Adding new properties: No
//Deleting new properties: No
//Modifying existing properties: No

// NOTE: This also fails to deep freez (for nested properties).
// After one level, properties can be added or deleted.

// Object.isFrozen()

// The Object.freeze() method freezes an object.
// Using this method guarantees high integrity by ensuring that
// pulling out, modifying existing properties, or
// adding new properties to the object will not be possible.

///////////////////////////////////////////////////////////////

// const arr = [
//   { id: 1, selected: true },
//   { id: 2, selected: true },
//   { id: 3, selected: true },
// ];

// const check = arr.some((el) => el.selected);

// console.log("che --->", check);

///////////////////////////////////////////////////////////////////////

// async function foo() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
//   await new Promise((resolve) => setTimeout(resolve(console.log("hello")), 0));
//   console.log("C");
// }

// console.log("D");
// foo();
// console.log("E");

/////////////////////////////////////////////////////////////////////

// console.log([] + []);

////////////////////////////////////////////////////////////////////

// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);

//////////////////////////////////////////////////////////////////

// function sum() {
//   return arguments.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));

// function sum(...arguments) {
//   return arguments.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3));

////////////////////////////////////////////////////////////////////////

// console.log(1 == "1");
// console.log(false == "0");
// console.log(true == "1");
// console.log("1" == "01");
// console.log(10 == 5 + 5);

///////////////////////////////////////////////////////////////////

// console.log("1" - -"1");
// console.log("1" + 1);

// console.log("1" + -"1");

// console.log(-(-"1")); //Formated from: console.log(- -"1")
// console.log(-"1");

// console.log(+(+"1")); //Formated from: console.log(+ +"1")
// console.log(+"1");

/////////////////////////////////////////////////////////////////

// 1.
// let lang = "javascript";
// (function () {
//   let lang = "java";
// })();

// console.log(lang);

// 2.
// (function () {
//   var lang2 = "java";
// })();

// console.log(lang2);

// 3.
// function test() {
//   var lang2 = "java";
// }
// test();
// console.log(lang2);

/////////////////////////////////////////////////////////////////////

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

////////////////////////////////////////////////////////////////////

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

///////////////////////////////////////////////////////////////////

// [1, 2, 3].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });

///////////////////////////////////////////////////////////////////////

// const arrTest = [10, 20, 30, 40, 50][(1, 3)];
// console.log(arrTest);

/////////////////////////////////////////////////////////////////////

// console.log([] + []);
// console.log([1] + []);
// console.log([1] + "abc");
// console.log([1, 2, 3] + [1, 3, 4]);

////////////////////////////////////////////////////////////////////

// const ans1 = NaN === NaN;
// const ans2 = Object.is(NaN, NaN);
// console.log(ans1, ans2);

// Answer: false true  ===> Explanation NaN is a unique value so it fails in equality check, but it is the same object so Object.is returns true.

/////////////////////////////////////////////////////////////////

// const arr1 = [1, 2, undefined, NaN, null, false, true, "", "abc", 3];
// console.log(arr.filter(Boolean));

// const arr2 = [1, 2, undefined, NaN, null, false, true, "", "abc", 3];
// console.log(arr.filter(!Boolean));

// Ans.
// [1, 2, true, “abc”, 3].
// **It will throw an error. **Explanation — **1. Array.filter() returns the array which matches the condition. As we have passed Boolean it returned all the truthy value.
// A

///////////////////////////////////////////////////////////////////////////

// const person = {
//   name: "Ayush Verma",
//   0.25e2: 25,
// };

// console.log(person[25]);
// console.log(person[0.25e2]);
// console.log(person[".25e2"]);

////////////////////////////////////////////////////////////////////

// console.log(new Array(3).toString());

// console.log(typeof new Array(3).toString());

////////////////////////////////////////////////////////////////////

// for (var i = 1; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
// }

// for (var i = 1; i < 5; i++) {
//   (function (arg) {
//     setTimeout(() => {
//       console.log(arg);
//     }, i * 1000);
//   })(i);
// }

/////////////////////////////////////////////////////////////////////////

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Ayush', 'Verma');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

// Answer TypeError Explanation In JavaScript, functions are objects,
// and therefore, the method getFullName gets added to the
// constructor function object itself.For that reason, we can call Person.getFullName(),
//     but member.getFullName throws a TypeError.
// If you want a method to be available to all object instances, you have to add it to the prototype property:

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

//////////////////////////////////////////////////////////////////////////

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const ayush = new Person('Ayush', 'Verma');
// const sarah = Person('Sarah', 'Smith');

// console.log(ayush);
// console.log(sarah);

// Answer:
//  Person { firstName: "Ayush", lastName: "Verma" } and undefined
// Explanation For sarah, we didn't use the new keyword. When using new,
// this refers to the new empty object we create.However, if you don't add new,
// this refers to the global object!

// We said that this.firstName equals "Sarah" and this.lastName equals "Smith".
// What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'.
// sarah itself is left undefined, since we don't return a value from the Person function.

//////////////////////////////////////////////////////////////////////////////////

// 1;
// let obj = {
//   x: 2,
//   getX: function () {
//     console.log(this.x);
//   },
// };

// obj.getX();

// 2;
// let x = 5;
// let obj = {
//   x: 2,
//   getX: () => {
//     console.log(this.x);
//   },
// };

// obj.getX();

// 3;
// let x = 5;
// let obj = {
//   x: 2,
//   getX: function () {
//     let x = 10;
//     console.log(this.x);
//   },
// };

// let y = obj.getX;
// y();

// ** Answer — **
// 1. 2
// 2. 5
// 3. 5
// Explanation First case is a regular function, the this keyword is bound
// to different values based on the context in which the function is called.
// Here obj is calling the function to this will point to current obj.

// The second case is an arrow function, it will use the value of this
// in their *** lexical scope ** i.e * value of x in surrounding scope.
// Here surrounding is the global scope or window object and “x” is also
// present.If “x” is not present then it is undefined.

// In the third case, “y” is assigned a value of obj.getX, and “y” is in
// the global scope or window object.Hence “this” will point to global
// scope i.e. 5.

//////////////////////////////////////////////////////////////////////////////////

// 1.

// function a() {
//   this.site = "Ayush";

//   function b() {
//     console.log(this.site);
//   }

//   b();
// }

// var site = "Wikipedia";
// a();

// 2.

// function a() {
//   this.site = "Ayush";

//   function b() {
//     console.log(this.site);
//   }

//   b();
// }

// var site = "Wikipedia";
// new a();

// 3.
// function a() {
//   this.site = "Ayush";

//   function b() {
//     console.log(this.site);
//   }

//   b();
// }

// let site = "Wikipedia";
// new a();

//////////////////////////////////////////////////////////////////////////////////

// async function temp() {
//   return 3;
// }
// console.log(temp());
// console.log(temp().then((res) => console.log(res)));

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//var, let and const. Assignment and ressignment.

// var a = 10;
// function fun() {
//   var a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

//////////////////////////////////////////////////////////////////////////

// let a = 10;
// function fun() {
//   let a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

//////////////////////////////////////////////////////////////////////////////

// const a = 10;
// function fun() {
//   const a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

///////////////////////////////////////////////////////////////////////////////////

// var a = 10;
// function fun() {
//   a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

////////////////////////////////////////////////////////////////////////////////

// let a = 10;
// function fun() {
//   a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

////////////////////////////////////////////////////////////////////////////////

// const a = 10;
// function fun() {
//   a = 20;
//   console.log("inside --->", a);
// }

// console.log("outside --->", a);
// console.log(fun());
// console.log("last --->", a);

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//Closures

// function createCounter() {
//   var count = 0;

//   return function () {
//     return ++count;
//   };
// }

// var counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

////////////////////////////////////////////////////////////

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   a = 20;
//   return inner;
// }
// var closureFunc = outer();
// closureFunc();

//////////////////////////////////////////////////////////

// var funcs = [];
// //with "var"
// for (var i = 0; i < 5; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs.forEach(function (func) {
//   func();
// });

// Final Output:
//Why ?

// When the functions are executed, each one prints 5 because they all reference the same i variable, which has the value 5 when they are invoked.
// This behavior occurs because JavaScript does not have block-level scoping for variables declared with var.
// Therefore, all the functions created inside the loop share the same
// i variable from the outer scope, and they all see its final value, which is 5.
// This is a common source of confusion when working with closures and loops in JavaScript.

////////////////////////////////////////////////////////////////

// var funcs = [];
// //with "let"
// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs.forEach(function (func) {
//   func();
// });

/////////////////////////////////////////////////////////////

// function createMultiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// var double = createMultiplier(2);
// var triple = createMultiplier(3);

// console.log(double(5));
// console.log(triple(5));

/////////////////////////////////////////////////////////////

// function outer() {
//   var message = "Hello";
//   setTimeout(function () {
//     console.log(message);
//   }, 1000);
// }

// outer();

//////////////////////////////////////////////////////////

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// var closure1 = outer();
// a = 20;
// var closure2 = outer();

// closure1();
// closure2();

////////////////////////////////////////////////////////////////

// var a = 10;
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// var closure1 = outer();
// a = 20;
// var closure2 = outer();

// closure1();
// closure2();

///////////////////////////////////////////////////////////////////

// var a = 10;
// function outer() {
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// var closure1 = outer();
// closure1(); //change the call sequence
// a = 20;
// var closure2 = outer();
// closure2();

////////////////////////////////////////////////////////////////

// function foo() {
//   var bar = "bar";
//   setTimeout(function () {
//     console.log(bar);
//   }, 1000);
//   bar = "baz";
// }
// foo();

//////////////////////////////////////////////////////////////

// "use strict"; //check with and without this line
// function alpha() {
//   var name = "masai";
//   console.log(this.name);
// }

// var name = "masai_School";
// alpha();

// console.log(name);

//////////////////////////////////////////////////////

// function a(params) {
//   var x = 100;
//   this.beta();
// }

// function beta(params) {
//   var x = 200;
//   console.log(this.x);
// }

// a();

/////////////////////////////////////////////////////////////////

// console.log([1] == [1]);
//ans. and why ?

// If you want to check whether two arrays have the same contents,
//   you should use a method like JSON.stringify() to convert the
//   arrays to strings and then compare them.For example:

// console.log(JSON.stringify([1]) === JSON.stringify([1])); // true

////////////////////////////////////////////////////////////////////

// console.log("ans --->", "1" == 1);
