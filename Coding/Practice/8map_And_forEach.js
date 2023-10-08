const myAwesomeArray = [1, 2, 3, 4, 5];
//map()
// const newArr = myAwesomeArray.map((x) => x * x); //MOST IMPORTANT: WE STORE IT IN A VARIABLE SO THAT WE CAN GET A RETURN VALUE.
// console.log(newArr); //>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
// console.log(myAwesomeArray);  //return value:[ 1, 2, 3, 4, 5 ]
///////////////////////////////////////////////////////////////////////////////////////
//forEach()
//forEach works like a simple for loop. It is just a new syntax of ES6.
const newArr = myAwesomeArray.forEach((x) => x * x);
console.log(newArr); //>>>>>>>>>>>>>return value: undefined
console.log(myAwesomeArray); //return value:[ 1, 2, 3, 4, 5 ]

////////////////
// Final Thoughts
// As always, the choice between map() and forEach() will depend on your use case. If you plan to change, alter, or use the data, you should pick map(), because it returns a new array with the transformed data.

// But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.

/////////////////////////////////////////////////////////////////////////////////////
// function abc(params) {
//   a = 2;
// }

// abc();
// console.log(a);

// const person = {
//   name: "Toony",
// };

// const personTwo = Object.create(person);

// console.log(personTwo.hasOwnProperty(name));

// const a = [1, 2, 3];

// const [n] = a;

// console.log(n);

// var obj = {
//   a: function a(params) {
//     console.log("hi");
//   },
// };

// let animal = ["1", "2"];
