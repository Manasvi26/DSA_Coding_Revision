// function showText(text, time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, time);
//   });
// }

// function myPromiseAll(promises) {
//   const result = [];
// }

// Promise.all([
//   showText("Hello", 2000),
//   Promise.resolve("Manasvi"),
//   Promise.reject("Error"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error: ", err));

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

// Output based questions
//1. With "await".

// (async function func(params) {
//   console.log("hello 2");

//   Promise.resolve("hello 3").then((res) => console.log(res));

//   const tempFunc = await new Promise((res, rej) => {
//     console.log("hello 4");
//     res("hello 5");
//   }).then((res) => console.log(res));

//   console.log("here --->", tempFunc);

//   setTimeout(() => {
//     console.log("hello 6");
//   }, 0);

//   console.log("hello 7");

//   return "Manasvi";
// })()
//   .then((res) => console.log("res --->", res))
//   .catch((err) => console.log("err --->", err));

////////////////////////////////////////////////////////////////////////////////////////

//Ex.2

// hello 2
// hello 4
// Promise { <pending> }
// hello 7
// hello 3
// what ? ---> hello 5
// res ---> Manasvi
// hello 6

// (async function func(params) {
//   console.log("hello 2");

//   Promise.resolve("hello 3").then((res) => console.log(res));

//   const tempFunc = new Promise((res, rej) => {
//     console.log("hello 4");
//     res("hello 5");
//   }).then((res) => console.log("what ? --->", res));

//   console.log(tempFunc);

//   setTimeout(() => {
//     console.log("hello 6");
//   }, 0);

//   console.log("hello 7");

//   return "Manasvi";
// })()
//   .then((res) => console.log("res --->", res))
//   .catch((err) => console.log("err --->", err));

///////////////////////////////////////////////////////////////////////////////////////////

//3. Without "await"

// (async function func(params) {
//   console.log("hello 2");

//   Promise.resolve("hello 3").then((res) => console.log(res)); //P1

//   new Promise((res, rej) => {
//     console.log("hello 4");
//     res("hello 5");
//   }).then((res) => console.log(res)); //P2

//   setTimeout(() => {
//     console.log("hello 6");
//   }, 0);

//   console.log("hello 7");

//   return "Manasvi";
// })()
//   .then((res) => console.log("res --->", res))
//   .catch((err) => console.log("err --->", err));

//Important NOTE: .then() is absolutely necessary to recieve the priomise. Otherwise it will remain pending.
//Important NOTE: See how setTimeout, executes even after final .then().
//Important NOTE: If our "main fuction" will not return anything, then in final .then() response will be, res ---> undefined.

//////////////////////////////////////////////////////////////

//Polyfill for Prmosise.all();

// let promise1 = Promise.resolve(
//   setTimeout(() => {
//     return "Hello 1";
//   }, 3000)
// );
// let promise2 = Promise.resolve("hello 2");
// let promise3 = Promise.resolve("hello 3");

// const promArr = [promise1, promise2, promise3];

// const result = Promise.all(promArr)
//   .then((res) => console.log("here --->", res))
//   .catch((err) => console.log("err --->", err));

// console.log("what ? --->", result);

// Promise.myPromiseAll = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     let result = [];

//     for (let i = 0; i < promiseArr.length; i++) {
//       const prom = promiseArr[i];
//       prom
//         .then((res) => {
//           result[i] = res;
//           if (result.length === promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// Promise.myPromiseAll = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let completedPromises = 0;

//     for (let i = 0; i < promiseArr.length; i++) {
//       const prom = promiseArr[i];
//       prom
//         .then((res) => {
//           result[i] = res;
//           completedPromises++;
//           if (completedPromises === promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// Promise.myPromiseAll = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let completedPromises = 0;

//     for (let i = 0; i < promiseArr.length; i++) {
//       const prom = promiseArr[i];
//       prom
//         .then((res) => {
//           result[i] = res;
//           completedPromises++;
//           if (completedPromises === promiseArr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// const result = Promise.myPromiseAll(promArr)
//   .then((res) => console.log("here --->", res))
//   .catch((err) => console.log("err --->", err));

// console.log("what ? --->", result);
/////////////////////////////////////////////////////////////////
// Promise.myPromiseAllSettled = function (promiseArr) {
//   return new Promise((resolve, reject) => {
//     let result = [];
//     let count = 0;

//     promiseArr.forEach((prom, index) => {
//       prom
//         .then((res) => {
//           result[index] = { status: "fulfilled", value: res };
//           count++;
//         })
//         .catch((err) => {
//           result[index] = { status: "rejected", reason: `${err}` };
//           count++;
//         })
//         .then(() => {
//           if (count === promiseArr.length) {
//             resolve(result);
//           }
//         });
//     });
//   });
// };

// const resultOfAllSettled = Promise.myPromiseAllSettled(promArr)
//   .then((res) => console.log("here --->", res))
//   .catch((err) => console.log("err --->", err));
// console.log("resultOfAllSettled --->", resultOfAllSettled);

///////////////////////////////////////////////////////////////////////////////////

//Return first fullfilled promise. If all the promises failed,
//then returns an aggregated error.

// Promise.myAny = function (promArr) {
//   return new Promise((resolve, reject) => {
//     let aggregatedError = [];
//     let count = 0;
//     promArr.forEach((prom, index) => {
//       prom
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((err) => {
//           aggregatedError[index] = err;
//           count++;
//           if (count === promArr.length) {
//             reject({
//               errors: aggregatedError,
//               message: "All promises got rejected!",
//             });
//           }
//         });
//     });
//   });
// };

// const resultOfAllSettled = Promise.myAny(promArr)
//   .then((res) => console.log("here --->", res))
//   .catch((err) => console.log("err --->", err.errors));
// console.log("resultOfAllSettled --->", resultOfAllSettled);

///////////////////////////////////////////////////////////////////////////////////

//promise.race();
//Returns the first promise which gets fulfilled or rejected.
// Promise.myRace = function (promArr) {
//   return new Promise((reject, resolve) => {
//     promArr.forEach((prom) => {
//       prom.then((res) => resolve(res)).catch((err) => reject(err));
//     });
//   });
// };

// const resultOfMyRace = Promise.myRace(promArr)
//   .then((res) => console.log("here --->", res))
//   .catch((err) => console.log("err --->", err));
// console.log("resultOfAllSettled --->", resultOfMyRace);

const dummyProm = new Promise((resolve) => {
  return new Promise(() => {
    setTimeout(() => {
      resolve("After 2 sec. I will be printed!");
    }, 2000);
  });
});

console.log(dummyProm.then((res) => console.log(res)));
