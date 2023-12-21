const arr = [4, 5, 2, [53, 39]];
const deepArr = JSON.parse(JSON.stringify(arr)); //partially deep
deepArr[3][0] = 100;
console.log("arr --->", arr);
console.log("deepArr --->", deepArr);

const obj = {
  name: "Manasvi",
  age: 28,
  proffesion: {
    position: "SDE",
    department: "Technology",
    work: function development() {
      console.log("Amazing growth!");
    },
  },
};

console.log(obj);
let newDeepObj = JSON.parse(JSON.stringify(obj));
// newDeepObj.proffesion.department = "IT";
console.log(newDeepObj);

function createDeepCopy(obj) {
  if (typeof obj !== "object" || typeof obj !== null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(createDeepCopy);
  }

  const newObj = {};
  for (const key in obj) {
    newObj[key] = createDeepCopy(obj[key]);
  }

  return newObj;
}

console.log(createDeepCopy(obj));
