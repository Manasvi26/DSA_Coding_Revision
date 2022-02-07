// // link: https://oj.masaischool.com/contest/3003/problem/02

//1. Brute Force solution

///////////////////////////////////////////////////////////////
//2. Mapping solution (Best solution)
//TC: O(n);
//SC: O(n);

// var arr = [2, 5, 7, 3, 3, 1, 5, 5, 3];

// var obj = {};

// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] === undefined) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]] = obj[arr[i]] + 1;
//   }
// }

// console.log(obj);

// var count = 0;
// result = -1;
// for (const key in obj) {
//   if (obj[key] > count) {
//     count = obj[key];
//     result = key;
//   }
// }
// console.log("count", count);
// console.log("result", result);
////////////////////////////////////////////////////////////

//3. Sort and traverse with two pointers
//TC: O(nlogn); //as sorting requires O(nlogn);
//SC: O(1);

function runProgram(input) {
  var input = input.split("\n");

  var cases = +input[0];
  var line = 0;
  for (let k = 0; k < cases; k++) {
    var arr = input[(line += 2)].split(" ").map(Number);
    // console.log(arr);
    arr.sort();
    // console.log(arr);
    var count = 0;
    var result = -1;
    var j = 0;
    while (j < arr.length) {
      var i = j;
      var newCount = 1;
      while (arr[j + 1] === arr[i]) {
        j++;
        newCount++;
      }

      if (newCount > count) {
        count = newCount;
        result = arr[i];
      }

      j++;
    }
    // console.log("count", count);
    console.log(result);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`2
6
1 4 4 4 5 3
11
1 2 3 4 5 4 3 2 1 3 4`);
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
