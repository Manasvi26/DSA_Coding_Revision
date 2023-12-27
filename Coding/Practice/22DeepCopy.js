const arr = [4, 5, 2, [53, 39]];
const deepArr = JSON.parse(JSON.stringify(arr)); //partially deep //nested arrays and objs will be
//copied properly too.
//Limitations:
// 1. Functions will not be copied.
// 2. Regex or Date types will not
//be kept intact.
//3. If "undefined" is a value assigned to any key, it will be ignored (not stored).

deepArr[3][0] = 100;
// console.log("arr --->", arr);
// console.log("deepArr --->", deepArr);

const obj = {
  name: "Manasvi",
  age: 28,
  limit: [1, 2, 3],
  proffesion: {
    position: "SDE",
    department: "Technology",
    work: function development() {
      console.log("Amazing growth!");
    },
  },
};

// console.log(obj);
// let newDeepObj = JSON.parse(JSON.stringify(obj));
// newDeepObj.proffesion.department = "IT";
// console.log(newDeepObj);

// function createDeepCopy(obj) {
//   console.log("first type check --->", typeof obj);
//   if (typeof obj !== "object" || typeof obj !== null) {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(createDeepCopy);
//   }

//   const newObj = {};
//   for (const key in obj) {
//     newObj[key] = createDeepCopy(obj[key]);
//   }

//   return newObj;
// }

// console.log("deep copy --->", createDeepCopy(arr));

// IMPORTANT TRICKY QUESTION

let a = [1, 2, [3, 4, [9, 10], 20], 100];

// CASE.1
// let b = a;

// CASE.2
// let b = [...a];

// b[0] = "abc";

// b[0] = "xyz";

// console.log("a --->", a);
// console.log("b --->", b);

/////////////////////////////////////////////////////

//IMPORTANT TRICKY QUESTION

// var arr = [{ a: 1 }, { b: 2 }];
// let arrCopy = [...arr];

// arrCopy[0].a = 10;
// arrCopy[1] = 1000;
// console.log(arr);

/////////////////////////////////////////////////
