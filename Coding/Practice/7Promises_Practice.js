let promise = new Promise((resolve, reject) => {
  let a = 2;
  if (a === 2) {
    resolve("Successful");
  } else {
    reject("Failed");
  }
});

promise
  .then((message) => {
    console.log(`Promise is ${message}!`);
  })
  .catch((message) => {
    console.log(`Promise ${message}!`);
  });

var api = 3;

// let promise = new Promise((resolve, reject) => {
//   if (api === 3) {
//     resolve("Successful");
//   } else {
//     reject("Failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log(`Status : ${message}`);
//   })
//   .catch((message) => {
//     console.log(`Status : ${message}`);
//   });
