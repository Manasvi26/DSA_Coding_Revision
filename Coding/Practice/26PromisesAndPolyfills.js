// let validation = true;
// const promise = new Promise((res, rej) => {
//   if (validation) {
//     res("Valid user!");
//   } else {
//     rej("Invalid user!");
//   }
// });

// promise.then((res) => console.log(res)).catch((err) => console.log(err));

//using fetch(), with .then() .catch()

// let data = fetch("https://api.github.com/users/Manasvi26")
//   .then((res) => res.json())
//   .then((res) => console.log("final res --->", res))
//   .catch((err) => console.log("Inside err --->", err));

// console.log(data());

//try catch with async await and we need to use .then() with async await
// async function getData() {
//   try {
//     const data = await fetch("https://api.github.com/users/Manasvi26");
//     const res = await data.json();
//     return res;
//   } catch (error) {
//     console.log("final err --->", error);
//     return error;
//   }
// }
// console.log(getData().then((data) => console.log("here data --->", data)));

//Creating polyfill for "all"

let dummyPromise = (time, valid) => {
  return new Promise((resolve, reject) => {
    try {
      if (valid) {
        setTimeout(() => {
          resolve(`Resolved in ${time}ms`);
        }, time);
      } else {
        throw Error("Custom error");
      }
    } catch (error) {
      console.log("came here");
      reject(error);
    }
  });
};

let promiseArr = [
  dummyPromise(1000, true),
  dummyPromise(2000, false),
  dummyPromise(3000, true),
];

//polyfill

// const myPromiseAll = function (promiseArr) {
//   return new Promise((res, rej) => {
//     let resultArr = [];

//     promiseArr.forEach((promise, index) => {
//       promise
//         .then((data) => {
//           resultArr[index] = data;
//           if (index === promiseArr.length - 1) {
//             res(resultArr);
//           }
//         })
//         .catch((error) => rej(error));
//     });
//   });
// };

// console.log(
//   myPromiseAll(promiseArr)
//     .then((res) => console.log(res))
//     .catch((err) => console.log("Final err --->", err))
// );

const myPromiseAllSettled = (promiseArr) => {
  return new Promise((res, rej) => {
    let resultArr = [];

    promiseArr.forEach((promise, index) => {
      promise
        .then((data) => {
          resultArr[index] = data;
        })
        .catch((err) => {
          resultArr[index] = err;
        })
        .finally(() => {
          if (resultArr.length === promiseArr.length) {
            res(resultArr);
          }
        });
    });
  });
};

console.log(
  myPromiseAllSettled(promiseArr)
    .then((data) => console.log("final --->", data))
    .catch((err) => console.log("final err --->", err))
);
