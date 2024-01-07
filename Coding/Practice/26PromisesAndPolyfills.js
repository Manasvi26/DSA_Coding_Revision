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
async function getData() {
  try {
    const data = await fetch("https://api.github.com/users/Manasvi26");
    const res = await data.json();
    return res;
  } catch (error) {
    console.log("final err --->", error);
    return error;
  }
}
console.log(getData().then((data) => console.log("here data --->", data)));
