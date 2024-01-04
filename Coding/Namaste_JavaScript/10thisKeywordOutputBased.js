// 1. What will be the output of the following code:

// javascript
// Copy code
// const obj = {
//   regularMethod: function() {
//     console.log(this);
//   },
//   arrowMethod: () => {
//     console.log(this);
//   }
// };

// obj.regularMethod();
// obj.arrowMethod();
// Solution: b) [object Object] and undefined

// Explanation: In regularMethod, this is determined by how the function is called within the context of obj, resulting in [object Object]. However, in arrowMethod, the arrow function captures this from the surrounding lexical scope, which is the global scope in this case, resulting in undefined.

// 2. What will be the output of the following code:

// javascript
// Copy code
// function outerFunction() {
//   const innerRegular = function() {
//     console.log(this);
//   };

//   const innerArrow = () => {
//     console.log(this);
//   };

//   innerRegular();
//   innerArrow();
// }

// outerFunction();
// Solution: d) undefined and [object Object]

// Explanation: innerRegular is a regular function, so its this is determined by how it is called within the context of outerFunction, resulting in undefined. innerArrow, being an arrow function, captures the this from its lexical scope, which is outerFunction, resulting in [object Object].

// 3. What will be the output of the following code:

// javascript
// Copy code
// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(`Hello, ${this.name}!`);
//   },
//   greetArrow: () => {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// person.greet();
// person.greetArrow();
// Solution: a) Hello, John! and Hello, undefined!

// Explanation: In greet, this.name refers to the name property of the person object, resulting in Hello, John!. In greetArrow, the arrow function captures this from its lexical scope, which is the global scope in this case, and since there is no name property in the global scope, it results in Hello, undefined!.

// 4. What will be the output of the following code:

// javascript
// Copy code
// const obj = {
//   method1: function() {
//     console.log(this);
//   },
//   method2: () => {
//     console.log(this);
//   }
// };

// const func1 = obj.method1;
// const func2 = obj.method2;

// func1();
// func2();
// Solution: c) undefined and [object Object]

// Explanation: func1 is a reference to method1, and when it is called, this is determined by how the function is called, resulting in undefined. func2 is a reference to method2, but since it is an arrow function, it captures this from its lexical scope, which is the global scope, resulting in [object Object].

// These questions and explanations help to reinforce the understanding of how the this keyword behaves in different scenarios, especially in regular functions and arrow functions.
