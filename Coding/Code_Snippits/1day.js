//Concept: Temporal dead zone
//Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = "Lydia";
//   let age = 21;
// }

// sayHi();
////////////////////////////////

//Concept: var and let, global scope and block scope "{}"
// for (var i = 0; i < 3; i++) {
//   // console.log("hello");
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   // console.log("let hello");
//   setTimeout(() => console.log(i), 1000);
// }
///////////////////////////////////////////////

//Concept: "this" keyword, regular function and arrow function (surrounding object: i.e. window)
// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

///////////////////////////////////////////////////
//CONCEPT:The unary plus tries to convert an operand to a number. true is 1, and false is 0.
// The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

// +true;
// console.log(+true);
// !"Lydia";
// console.log(!"Lydia");

///////////////////////////////////////////////////////
//CONCEPT: 1. Every key is been converted to string in Js, under the hood!
// 2. Dot notation Vs Bracket notation. First Js solves the bracket.

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// A: mouse.bird.size is not valid
// B: mouse[bird.size] is not valid
// C: mouse[bird["size"]] is not valid
// D: All of them are valid

//////////////////////////////////////////////////////

//CONCEPT: In JavaScript, all objects interact by reference when setting them equal to each other.
//When you change one object, you change all of them.

// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// A: Hello
// B: Hey!
// C: undefined
// D: ReferenceError
// E: TypeError

////////////////////////////////////////////////////////////////////

//CONCEPT: 1. new Number(), creates an object
// 2. strict equals also checks the "type of"

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// A: true false true
// B: false false true
// C: true false false
// D: false true true

//////////////////////////////////////////////////////// VERY IMPORTANT ....////

//CONCEPT : INHERITANCE AND PROTOTYPES
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person('Lydia', 'Hallie');
// Person.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());
// A: TypeError
// B: SyntaxError
// C: Lydia Hallie
// D: undefined undefined
// Answer
// Answer: A
// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

//How to do it then ?

// If you want a method to be available to all object instances, you have to add it to the prototype property:

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

////////////////////////////////////

// Q. 12 and 13 very important to understand about constructor function

/////////////////////////////////////

// Q. 14 Very important to understand the basics of Js (objects, prototype and methods. How do we actually use built in methods ? )

///////////////////////////////////////
