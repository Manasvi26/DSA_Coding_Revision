var arr = ["ram", "shyam", "ram", "ram", "shyam", "ghanshyam", "lakshman"];
var sortedArr = arr.sort();
// console.log(sortedArr);
// var newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       newArr.push(arr[i]);
//       break;
//     }
//   }
// }

// ["ghanshyam", "lakshman", "ram", "ram", "ram", "shyam", "shyam"];

var newArr = [];
for (let i = 0; i < sortedArr.length; i++) {
  if (
    sortedArr[i] === sortedArr[i + 1] &&
    newArr[newArr.length - 1] !== sortedArr[i]
  ) {
    newArr.push(sortedArr[i]);
  }
}

console.log(newArr);

// console.log(newArr);

// const [login, setLogin] = useState(flase);

// useEffect(() => {
//   console.log("Render");
// });

// useEffect(() => {
//   // console.log(login);
//   console.log("Render");
// }, [login]);

// useEffect(() => {
//   console.log("Render");
// }, []);
// 1000
// 1600

// @media(max - width: 800) {

//     width: 500;

// }

// 3445678913456754322
