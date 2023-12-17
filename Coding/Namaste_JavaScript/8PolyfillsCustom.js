//Polyfill of map();

//map
// arr.map((el,index,arr)=>{})
//return a new array

//so,

// let arr = [1, 2, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// const result = arr.myMap((el, i, arr) => {
//   return el * 3;
// });
// console.log("result --->", result);

//Now filter();

// let arr = [1, 2, 4, 5, 6];
// const originalFilter = arr.filter((el) => el % 2 === 0);
// console.log(arr);
// console.log("originalFilter ---", originalFilter);

//custom filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// const newFilter = arr.myFilter((el) => el % 2 === 0);
// console.log("newFilter --->", newFilter);

//Now reduce();

let arr = [1, 2, 4, 5, 6];

//Sum of an array

// const originalReduceSum = arr.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// }, 0);

// console.log("originalReduceSum--->", originalReduceSum);

//custom reduce

Array.prototype.myReduce = function (cb, initVal) {
  let myAcc = initVal;
  for (let i = 0; i < this.length; i++) {
    myAcc = myAcc ? cb(myAcc, this[i], i, this) : this[i];
  }
  return myAcc;
};

const myReduceSum = arr.myReduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

console.log("myReduceSum--->", myReduceSum);
