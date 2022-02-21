function runProgram(input) {
  let num = +input;

  // console.log(num);

  //   function fib(num) {
  //     if (num === 0) {
  //       return 0;
  //     }
  //     if (num === 1) {
  //       return 1;
  //     }

  //     return fib(num - 1) + fib(num - 2);
  //   }
  //   console.log(fib(num));

  let dp = [];
  function fib(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;
    if (typeof dp[num] !== "undefined") {
      return dp[num];
    }

    dp[num] = fib(num - 1) + fib(num - 2);
    return dp[num];
  }
  console.log(fib(num));
}

if (process.env.USERNAME === "manas") {
  runProgram(`40`);
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
