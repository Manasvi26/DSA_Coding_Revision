//this is a program by which we can understand how the local execution context (enviroment) for each function is created, and then destroyed after its execution!

//this also a good example to give while explaining HOISTING!

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

//////////////////////////////////////////////

//////////////////////////////>>>What happens when we declare a function with "var" insted of "function" keyword!
var x = 1;
a(); //TypeError: a is not a function.
// As we are declaring function by saying it is a "var" in line 42 and we are trying to invoke a "var" here! As, in GEC it is assigned a value of undefined! and we are trying to invoke undefined!
b();

console.log(x);

var a = () => {
  const x = 10;
  console.log(x);
};

a();

function b() {
  const x = 100;
  console.log(x);
}

///////////////////////////////////////////////////////////

//////////////////////////////>>>What happens when we declare a function with "const" insted of "function" keyword!

// const x = 1;

// // a(); //ReferenceError: Cannot access 'a' before initialization.
// // As we are using keyword "const" to declare the function at line 25. With "const" it has to be initalised first! So, when invoked after the initialisation then it will give the correct output!

// b();

// console.log(x);

// const a = () => {
//   const x = 10;
//   console.log(x);
// };

// // a();

// function b() {
//   const x = 100;
//   console.log(x);
// }

/////////////////////////////////////////////////
