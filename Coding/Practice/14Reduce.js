//Reduce: Whenever we are taking all the values of an array,
//and come up with a single value out of them.
// Ex.
// Sum of all the elements of an array.
// Max.in an array.
//****** MOST IMPORTANT : Getting an "object" (single value) out of an array (list) ******

// Example 1

// Sum of an array
let arr = [5, 1, 3, 2, 6];
// function sumOfArr(array) {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum = sum + array[index];
//   }
//   return sum;
// }

// const total = sumOfArr(arr);
// console.log("total ===>", total);

//WITH REDUCE
// const sum = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// const sum = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log("sum ===>", sum);

////////////////////////////////////////////////////////////
// Example 2
//FIND MAX inside an array.

function maxInArr(array) {
  let max = 0;
  for (let index = 0; index < array.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}
// console.log("maximum ===>", maxInArr(arr));

//NOW WITH REDUCE
const maximum = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

//acc is just a "name", for more clarity we can write it as "max"
const max = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

// console.log("maximum ==>", maximum);
///////////////////////////////////////////////////////////////////

let people = [
  { name: "a", age: "21" },
  { name: "b", age: "43" },
  { name: "c", age: "31" },
  { name: "d", age: "21" },
  { name: "e", age: "35" },
  { name: "f", age: "21" },
  { name: "g", age: "35" },
];

const newArr = people.map((item) => item.age);
console.log(newArr);

function ageFunction(arr) {
  const ageObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!ageObj[arr[i]]) {
      ageObj[arr[i]] = 1;
    } else {
      ageObj[arr[i]] = ageObj[arr[i]] + 1;
    }
  }
  return ageObj;
}
const res = ageFunction(newArr);
// console.log("res ===>", res);

//NOW WITH REDUCE
//****** MOST IMPORTANT : Getting an "object" (single value) out of an array (list) ******

const result = people.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age] = ++acc[curr.age]; // acc[curr.age] = acc[curr.age] + 1;
  }

  return acc;
}, {});
console.log("result --->", result);
