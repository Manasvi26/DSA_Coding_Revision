// contest link: https://oj.masaischool.com/contest/3027/problems

function runProgram(input) {
  var input = input.split("\n");
  var cases = +input[0];

  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    // console.log(arr);

    // arr.sort();
    // // console.log(arr);
    // maxSum = arr[arr.length - 1] * arr[arr.length - 2];
    // console.log(maxSum);

    var max = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        var product = arr[i] * arr[j];
        if (product > max) {
          max = product;
        }
      }
    }
    console.log(max);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`3
6 
1 0 7 2 4 0
5
1 2 3 4 5
2
0 0`);
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
