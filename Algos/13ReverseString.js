// let str = "manasvi";

// function reverseStr(str) {
//   let strArr = str.split("");

//   let i = 0;
//   let j = strArr.length - 1;

//   while (i <= j) {
//     const temp = strArr[i];
//     strArr[i] = strArr[j];
//     strArr[j] = temp;
//     i++;
//     j--;
//   }

//   const result = strArr.join("");

//   return result;
// }

// console.log(reverseStr(str));

// let sentence = "My name is Manasvi Sharma";

// const arr = [1, 2, [3, 4, [5, 6], 7], 8, 9];
// console.log(JSON.parse(arr));
// console.log(arr.flat(10));

// function myFlattening(arr) {
//   let flatArr = [];

//   function flat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       const el = arr[i];
//       if (Array.isArray(el)) {
//         flat(el);
//       } else {
//         flatArr.push(el);
//       }
//     }
//   }
//   flat(arr);
//   return flatArr;
// }

// console.log(myFlattening(arr));

const target = {
  field1: 1,
  field2: undefined,
  field3: "value",
  field4: {
    child: "child",
    child4: "child4",
    child2: {
      child3: "child2",
    },
  },
};

// // // {
// // //   field1: 1,
// // //   field2: undefined,
// // //   field3: "value",
// // //   "field4.child": "child",
// // //   "field4.child4": "child4",
// // //   "field4.child2.child3": "child2"
// // // };

function flatThisObject(obj, parent) {
  const result = {};
  function flatten(obj, parent) {
    for (const key in obj) {
      const newParent = parent + key;
      const value = obj[key];
      if (typeof value === "object") {
        flatten(value, newParent + ".");
      } else {
        result[newParent] = value;
      }
    }
  }
  flatten(obj, "");
  return result;
}

console.log(flatThisObject(target, ""));
