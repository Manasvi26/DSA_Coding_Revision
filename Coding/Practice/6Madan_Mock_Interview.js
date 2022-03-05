//Curring: Function within a function
function a(num1) {
  return function b(num2) {
    return num1 + num2;
  };
}

// console.log(a(1)(2));
const number1 = a(1);
// console.log(number1(2));

// function a(num1) {}
function add(num) {
  function adder(n) {
    if (n !== undefined) {
      num += n;
      return adder; //returning a function
    } else {
      // terminate
      return num;
    }
  }
  return adder; //returning a function
}

// console.log(add(1)(2)(3)(4)());
// console.log(add(1)(2)(3)(4)());
////////////////////////////////////////////////////////////////

//Cacheing (Memoisation).

// var dp = [];

// function first() {}

// var obj = {};
// function additionCaching(a, b) {
//   if (obj[`${a}+${b}`]) {
//     console.log("caching");
//     return obj[`${a}+${b}`];
//   } else {
//     console.log("not caching");
//     obj[`${a}+${b}`] = a + b;
//     return obj[`${a}+${b}`];
//   }
// }

// console.log(additionCaching(1, 2));
// console.log(additionCaching(2, 3));
// console.log(additionCaching(1, 2));
// console.log(additionCaching(2, 3));
// console.log(additionCaching(2, 5));
// console.log(additionCaching(2, 3));

///////////////////////////////////////////////////

//Polyfills
//map(): returns an array.
//myMap();

// arr.map((el) => {
//   return el + 2;
// });

Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    let value = cb(this[i]);
    res.push(value);
  }
  return res;
};

let arr = [1, 2, 3];

var newArr = arr.myMap((el) => {
  return el + 2;
});

// console.log(newArr);

////////////////////////////////////////////////////////////

// console.log("1"); //1st

// setTimeout(() => {
//   console.log("2"); //5th
// }, 0);

// const promise = new Promise((res, rej) => {
//   var flag = true;
//   if (flag) {
//     res();
//   } else {
//     rej();
//   }
// });

// console.log("3"); //2nd

// promise
//   .then(() => {
//     console.log("4"); //4th
//   })
//   .catch(() => {
//     console.log("5");
//   });

// console.log("6"); //3rd

//////////////////////////////////////////////////////////////

// var a = [1, 2, 3, 4, 5];
// var b = a; //this is reference
// var c = [...a]; //this is creating a different memory location

var a = [[1, 2, 3, 4, 5]];
var b = a;
// var c = [...a]; //shallow copy
var c = JSON.parse(JSON.stringify(a)); //deep copy

a[0][0] = 100;

// console.log(a); //[100, 2, 3, 4, 5];
// console.log(b); //[100, 2, 3, 4, 5];
// console.log(c); //[[1, 2, 3, 4, 5]];

//For shallow copy If it is nested, then is will always be stored by reference.

//With deep cloning nested objs will be also be cloned (new one, not a reference)

/////////////////////////////////////////////////////////

// var a = "madan";
// var b = a;

// a = "manasvi";

// console.log(b);

////////////////////////////////////////////////////////////

var b = 1;

function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b); //3
  }
  inner();
}

outer();
////////////////////////////////////////////////////////////

//Bable: Is a transpiller that converts mordern Js code to older Js code.
