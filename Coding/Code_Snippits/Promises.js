// function a() {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 0);
//   new Promise((resolve) => {
//     console.log(3);
//     resolve(4);
//     console.log(5);
//   });
//   new Promise((resolve) => resolve(6)).then(console.log);
//   console.log(7);
// }
// a();

/////////////////////////////////////////////////

// console.log(1);

// new Promise((resolve) => {
//   console.log(2);
//   resolve(3);
// }).then(console.log);

// console.log(4);

/////////////////////////////////////////////////

// console.log(1);

// Promise.resolve().then(() => {
//   console.log(2);

//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// });

// console.log(4);

////////////////////////////////////////////////////

// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve()
//   .then(() => {
//     console.log(3);

//     setTimeout(() => console.log(4), 0);

//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log(5);
//   });

// console.log(6);

////////////////////////////////////////////////

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");

///////////////////////////////////////////////////////

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//     return 2;
//   })
//   .then((x) => {
//     console.log(x);
//     return Promise.resolve(3);
//   })
//   .then(console.log);

// console.log(4);

/////////////////////////////////////////////////////////////
// async function test() {
//   console.log(1);

//   await Promise.resolve();

//   console.log(2);
// }

// test();

// Promise.resolve().then(() => {
//   console.log(3);
// });

// console.log(4);

///////////////////////////////////////////////////////////

// async function test() {
//   console.log(1);

//   await Promise.resolve();

//   console.log(2);

//   await Promise.resolve();

//   console.log(3);
// }

// test();

// console.log(4);

// "AWAIT" PE CODE RUK JATA HAI, AAGE BAKI SYNCHRONOUS CODE SOLVE HOTA HAI PHIR, THEN AWAIT (ASYNC) WALA

///////////////////////////////////////////////////////////

// console.log(1);

// new Promise((resolve) => {
//   console.log(2);

//   resolve();

//   console.log(3);
// })
//   .then(() => {
//     console.log(4);
//   })
//   .then(() => {
//     console.log(5);
//   });

// console.log(6);

//MOST IMP> THING TO LEARN IS, PROMISE RESOLVE PE RUKTA HAI (.then() solve nhe karta), BAKI CHALTA HAI AAGE USS BLOCK MAI JAB TAK RESOLVE NHHE AATA

// console.log(1);

// Promise.resolve()
//   .then(() => {
//     console.log(2);

//     setTimeout(() => {
//       console.log(3);
//     }, 0);
//   })
//   .then(() => {
//     console.log(4);
//   });

// console.log(5);

///////////////////////////////////////////////////////////////

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log(3);

//     setTimeout(() => {
//       console.log(4);
//     }, 0);
//   })
//   .then(() => {
//     console.log(5);
//   });

// Promise.resolve().then(() => {
//   console.log(6);
// });

// console.log(7);

//////////////////////////////////////////////////////////

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//     Promise.resolve(2);
//   })
//   .then(console.log);

//1 -

/////////////////////////////////////////////////////////////

// console.log(1);

// setTimeout(() => {
//   console.log(2);

//   Promise.resolve().then(() => {
//     console.log(3);
//   });
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log(4);

//     setTimeout(() => {
//       console.log(5);
//     }, 0);
//   })
//   .then(() => {
//     console.log(6);
//   });

// console.log(7);

//////////////////////////////////////////////////////////////

console.log(1);

setTimeout(() => {
  console.log(2);

  Promise.resolve().then(() => {
    console.log(3);
  });

  setTimeout(() => {
    console.log(4);
  }, 0);
}, 0);

Promise.resolve()
  .then(() => {
    console.log(5);

    return Promise.resolve();
  })
  .then(() => {
    console.log(6);

    setTimeout(() => {
      console.log(7);
    }, 0);
  });

console.log(8);
//1,8,5,6,2,3,7,4
