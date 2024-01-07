//First see what call apply bind is. Refer to
// Refer to: Namaste_JavaScript\6CallApplyBind.js

// let obj = {
//   name: "Manasvi",
//   age: "29",
// };

// function greet() {
//   return `Hello ${this.name}`;
// }

// console.log(greet());
//Will return "Hello undefined"

// Now, we need to provide it the context.
//So,
// const bindingGreet = greet.call(obj);
// console.log(bindingGreet()); //this will give type error
// console.log(bindingGreet);

///////////////////////////////////////////////////////////

const person = {
  name: "Manasvi",
  age: "29",
};

function personDetails(departmentName, position) {
  return `${this.name} works in ${departmentName} department, as an ${position}.`;
}

//call

// console.log(personDetails.call(person,"Technology", "SDE")); //executing directly
//or
// const callDetalils = personDetails.call(person, "Technology", "SDE");
// console.log(callDetalils);

//apply
// console.log(personDetails.apply(person, ["Technology", "SDE"]));

//bind
//now comes "bind". As name suggests, "binds" the "function" with the
//particular "object" and returns a "resuable" function.
// The bind method creates a "new function" that, when called,
// "has its this keyword" set to the provided value, with a
// given sequence of arguments.

// const bindDetails = personDetails.bind(obj);
// const person1 = bindDetails(["Technology", "SDE"]);
//Wrong output, as if we passed in array, it is considered as one parameter and get concatinated.
//o/p: Manasvi works in Technology,SDE department, as an undefined.

// const person2 = bindDetails("Business", "Executive");
//Correct output
//Manasvi works in Business department, as an Executive.

// console.log(person1);
// console.log(person2);

//Example 2.
// const bindDetails = personDetails.bind(obj, "Technology", "SDE");
// console.log(bindDetails());

///////////////////////////////////////////////////////////////////////

//***** Creating POLYFILLS of above methods *******/

let obj = {
  name: "Manasvi",
  age: "29",
};

function greet(hometown, position) {
  return `Hello ${this.name}. He is from ${hometown}. He works as an ${position}.`;
}

Function.prototype.myBind = function (...args) {
  let func = this; //greet will be our "this"
  return function (...funcArgs) {
    return func.apply(args[0], [...args.slice(1), ...funcArgs]);
  };
};

// const greetMyBind = greet.myBind(obj);
// console.log(greetMyBind("Alwar","SDE"));

//"bind" pollyfill

Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};

printName.myCall(myName, "Palia", "India");
