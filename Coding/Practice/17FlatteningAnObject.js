const obj = {
  a: 10,
  b: 20,
  c: {
    d: 1,
    e: 2,
    f: {
      g: "manasvi",
      h: {
        i: "sharma",
        j: ["apple", "banana", "orange"],
      },
    },
  },
};

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

function flattenAnObject(object, parent) {
  const finalObj = {};

  const flatteningObj = (object, parent) => {
    for (const key in object) {
      const newParent = parent + key;
      const value = object[key];

      if (typeof value === "object") {
        flatteningObj(value, newParent + ".");
      } else {
        finalObj[newParent] = value; //this line, making "newParent" as key
      }
    }
  };
  flatteningObj(object, parent);
  return finalObj;
}

console.log(flattenAnObject(target, ""));

// const arr = [4, 2, 5, [45, 32, 9, [98, 342, 893], 90, 43], 4, 75, [54, 256]];

// function flateningArray(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!Array.isArray(array[i])) {
//       result.push(array[i]);
//     } else {
//       result.push(...flateningArray(array[i]));
//     }
//   }
//   return result;
// }

// console.log(flateningArray(arr));
