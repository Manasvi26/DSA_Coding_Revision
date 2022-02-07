// link: https://oj.masaischool.com/contest/3003/problem/04

function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);
  var obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }

  //   console.log(obj);

  result = [];
  for (const key in obj) {
    if (obj[key] > n / 3) {
      result.push(key);
    }
  }

  //   console.log("result", result);
  console.log(result.join(" "));
}

if (process.env.USERNAME === "manas") {
  runProgram(`12
4 4 6 4 4 4 6 6 6 6 6 6`);
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
