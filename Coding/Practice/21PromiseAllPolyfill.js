function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

// function myPromiseAll(promises) {
//   const result = [];
// }

Promise.all([
  showText("Hello", 2000),
  Promise.resolve("Manasvi"),
  Promise.reject("Error"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error: ", err));

// const myPromise = (val, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (val % 2 === 0) {
//         resolve("Even number");
//       } else {
//         reject("Odd number");
//       }
//     }, time);
//   });
// };

// myPromise(3, 2000)
//   .then((val) => console.log(val))
//   .catch((val) => console.log(val));
