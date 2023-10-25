//this is a program by which we can understand how the local execution context (enviroment) for each function is created, and then destroyed after its execution!

//this also a good example to give while explaining HOISTING!

// var x = 1;
// a();
// // console.log(a()); //will give 10 at first and then gives undefined!
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
// var x = 1;
// a(); //TypeError: a is not a function.
// // As we are declaring function by saying it is a "var" in line 42 and we are trying to invoke a "var" here! As, in GEC it is assigned a value of undefined! and we are trying to invoke undefined!
// b();

// console.log(x);

// var a = () => {
//   const x = 10;
//   console.log(x);
// };

// a();

// function b() {
//   const x = 100;
//   console.log(x);
// }

///////////////////////////////////////////////////////////

//////////////////////////////>>>What happens when we declare a function with "const" insted of "function" keyword!

// const x = 1;

// a(); //ReferenceError: Cannot access 'a' before initialization.
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

// code example 4

// function getName() {
//   console.log("Namaste JavaScript");
// }

// console.log(getName);

// /////////////////////////////////////////////////////
// var a = 10; // not inside any fun. So global object
// function b() {
//   // this fun not inside any function. So global.
//   var x = 5; // not global
// }
// console.log(window.a); //gives us "a" value
// console.log(this.a); //this points to window so it returns "a" value
// console.log(a); //also gives same "a" value. (if we dont put any . in front of variable, it **assumes variable is in global space**
// console.log(x); // x is not defined. (tries to find x inside global space, but it isn't there)

/////////////////////////////////////////////////////
// Nested Example 1

// function a() {
//   c();  // Diff.This line  (Change of sequence)
//   var b = 8;   //Diff .This line  (Change of sequence)
//   function c() {
//     console.log("line 1 --", b);
//     d();
//     function d() {
//       console.log("line 2 --", b);
//       temp();
//       function temp() {
//         console.log("line 3 --", b);
//       }
//     }
//   }
// }
// var b = 10;
// a();
////////////////////////////////////////////////////////

/////////////////////////////////////////////////////
// Nested Example 2

function a() {
  var b = 8; //Diff .This line (Change of sequence)
  c(); // Diff.This line (Change of sequence)
  function c() {
    console.log("line 1 --", b);
    function d() {
      console.log("line 2 --", b);
      temp();
      function temp() {
        console.log("line 3 --", b);
      }
    }
  }
}
var b = 10;
a();
////////////////////////////////////////////////////////
