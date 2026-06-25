let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.map((el) => el * 2);

// console.log("arr --->", arr);
// console.log("newArr --->", newArr);

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }

  return result;
};

// let newArr = arr.myMap((el) => el * 2);

// console.log("arr --->", arr);
// console.log("newArr --->", newArr);

//filter

// let newArr = arr.filter((el) => el % 2 === 0);

// console.log("arr --->", arr);
// console.log("newArr --->", newArr);

Array.prototype.myFilter = function (cb) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};

// let newArr = arr.myFilter((el) => el % 2 === 0);

// console.log("arr --->", arr);
// console.log("newArr --->", newArr);

//reduce

// let newArr = arr.reduce((acc,el) => {
//   return acc + el;
// }, 0);

// let newArr1 = arr.reduce((acc, el) => {
//   return acc + el;
// });

Array.prototype.myReduce = function (cb, initVal) {
  let result = initVal;
  for (let i = 0; i < this.length; i++) {
    result = result ? cb(result, this[i], i, this) : this[i];
  }

  return result;
};

let newArr = arr.myReduce((el, acc) => {
  return el + acc;
}, 10);

let newArr1 = arr.myReduce((el, acc) => {
  return el + acc;
});

// console.log("newArr --->", newArr);
// console.log("newArr1 --->", newArr1);

//Flatter an array

let complexArr = [1, 2, [3, 4, [5, 6, 7], 8], 9];

let result = [];
function flatterAnArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Array.isArray(element)) {
      flatterAnArray(element);
    } else {
      result.push(element);
    }
  }

  return result;
}

console.log(flatterAnArray(complexArr));
