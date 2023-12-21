const arr = [3, 4, 34, 56, 25, 67, 94];

Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

const newArr = arr.myMap((el) => el * 2);
// console.log(newArr);

Array.prototype.myFilter = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

// console.log(arr.myFilter((el) => el % 2 === 0));

const tempArr = [1, 2, 3, 4, 5, 6];

//Example 1.
const sumOfAllElements = tempArr.reduce((acc, el) => {
  return acc + el;
}, 0);

// console.log(sumOfAllElements);

const newArray = [1, [20, 30], [40, 50], 6];
//Example 2. //Fletten an array, single level.
const flattenArray = newArray.reduce((acc, el) => {
  return acc.concat(el);
}, []);

// console.log(flattenArray);

//Examle 3. //Finding the max.

const arrThree = [1, 20, 30, 40, 50, 6];

const findMax = arrThree.reduce((acc, el) => {
  return Math.max(acc, el);
});
// console.log(findMax);

//Examle 4. //Counting the instances.
const fruits = ["apple", "orange", "banana", "apple", "banana", "apple"];

const instances = fruits.reduce((acc, el) => {
  //   if (!acc[el]) {
  //     acc[el] = 1;
  //   } else {
  //     acc[el] = acc[el] + 1;
  //     }

  acc[el] = (acc[el] || 0) + 1;

  return acc;
}, {});

// console.log(instances);

//Now makinga a polyfill of reduce

Array.prototype.myReduce = function (cb, initVal) {
  let initialValue = initVal;

  for (let i = 0; i < this.length; i++) {
    initialValue = initialValue ? cb(initialValue, this[i], i, this) : this[i];
  }

  return initialValue;
};

// Array.prototype.myReduce = function (cb, initVal) {
//   let myAcc = initVal;
//   for (let i = 0; i < this.length; i++) {
//     myAcc = myAcc ? cb(myAcc, this[i], i, this) : this[i];
//   }
//   return myAcc;
// };

const myArr = [1, 2, 3, 4, 5, 6];

const myReduceSum = myArr.myReduce((acc, el) => {
  return acc + el;
});

console.log(myReduceSum);
