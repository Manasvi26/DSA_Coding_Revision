function runProgram(input) {
  var input = input.split("\n");
  console.log(input);
  var [n, total] = input[0].split(" ").map(Number);
  //   console.log(n, sum);

  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);

  function countTheWaysForCoins(arr, n, total) {
    if (n === 0) {
      return 0;
    }

    if (total === 0) {
      return 1;
    }

    if (n <= 0 && total >= 1) {
      return 0;
    }

    return (
      countTheWaysForCoins(arr, n - 1, total) +
      countTheWaysForCoins(arr, n - 1, total - arr[n - 1])
    );
  }

  console.log(countTheWaysForCoins(arr, arr.length, total));
}

if (process.env.USERNAME === "manas") {
  runProgram(`3 11
1 5 7`);
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
