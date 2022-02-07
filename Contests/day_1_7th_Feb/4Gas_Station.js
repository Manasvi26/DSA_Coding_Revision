// // link: https://oj.masaischool.com/contest/3003/problem/03

function runProgram(input) {
  var input = input.split("\n");

  var gas = input[1].split(" ").map(Number);
  var cost = input[2].split(" ").map(Number);

  var total = 0;
  var index = -1;
  for (let i = 0; i < gas.length; i++) {
    total = total + gas[i] - cost[i];
  }
  //   console.log("total", total);

  // var current = null;
  if (total >= 0) {
    var check = false;
    for (let i = 0; i < gas.length; i++) {
      var current = null;

      current = current + gas[i] - cost[i];
      var j = i + 1;
      while (current >= 0) {
        current = current + gas[j] - cost[j];
        j++;
        if (j === gas.length) {
          index = i;
          check = true;
        }
      }

      if (check) {
        break;
      }
    }
  }

  console.log(index);
}

if (process.env.USERNAME === "manas") {
  runProgram(`5
4 3 4 6 6
3 5 6 2 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

// const name
// name = 'masai'
// console.log(name)

// const arr = [1, 2, 3];

// arr = arr.map(function (a) {
//   return a + 10;
// });

// console.log(arr);

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res));

// async function f() {
//   let result = "first!";
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   result = await promise;

//   console.log(result);
// }

// f();

// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.reject("Third");
// const promise4 = Promise.resolve("Fourth");

// const runPromises = async () => {
//   const res1 = await Promise.all([promise1, promise2]);
//   const res2 = await Promise.all([promise3, promise4]);
//   return [res1, res2];
// };

// runPromises()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/////////////////////////

// function Person(name, age) {
//   var obj = {};
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }

// var p1 = new Person("masai", 25);

// console.log(typeof p1);

///////////////////////////////////

// What does the Object.create do?

// The Object.create() method creates a new object, using an existing object

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// The Object.create() method creates a new object, using an existing object and creates a copy

///////////////////////////////////////

// let a = 1,
//   b = 2;

// [a, b] = [b, a];
// console.log(a, b);
//////////////////////////////////////

// For a constructor an object created by a constructor is copy of that constructor.

// True

// False

///////////////////////

// // counter.js
// let counter = 10;
// export default counter;
// // index.js
// import myCounter from './counter';

// myCounter += 1;

// console.log(myCounter);

///////////////////////////////////////

// const myPromise = Promise.resolve("Woah some cool data");

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log("Oh finally!");
//   }
// })();

/////////////////////////////////////

// function getName() {
//   var status = true;
//   if (status) {
//     const name = "masai";
//   }
//   console.log(name);
// }

// getName();
/////////////

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// Dog.prototype.bark = function () {
//   console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");
// // console.log("before delete", pet);

// pet.bark();

// delete Dog.prototype.bark;

// // console.log(pet);

// pet.bark();
