function runProgram(input) {
  var n = +input;
  //   console.log(n);

  var dp = [];
  function numOfWays(n) {
    if (n < 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    if (typeof dp[n] !== "undefined") {
      return dp[n];
    }

    dp[n] = numOfWays(n - 1) + numOfWays(n - 2) + numOfWays(n - 3);
    return dp[n];
  }

  console.log(numOfWays(n + 1));
}

if (process.env.USERNAME === "manas") {
  runProgram(`32`);
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
