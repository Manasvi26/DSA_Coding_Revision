// Contest link: https://oj.masaischool.com/contest/3003/problems

// Q.link: https://oj.masaischool.com/contest/3003/problem/01

function runProgram(input) {
  var input = input.split(" ").map(Number);
  //   console.log(input);
  var num1 = input[0];
  var num2 = input[1];
  var num3 = input[2];

  if (num1 === num2) {
    console.log(num3);
  } else if (num2 === num3) {
    console.log(num1);
  } else if (num3 === num1) {
    console.log(num2);
  } else {
    console.log(0);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`1 1 3`);
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
