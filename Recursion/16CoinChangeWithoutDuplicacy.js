function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);
  var [n, total] = input[0].split(" ").map(Number);
  //   console.log(n, total);
  var arr = input[1].split(" ").map(Number);

  //   console.log(arr);

  function coinChangeNoDuplicacy(i, arr, n, total, ansSoFar) {
    if (i === arr.length) {
      if (ansSoFar === total) {
      }

      return;
    }

    coinChangeNoDuplicacy(i + 1, arr, total - arr[i], ansSoFar + arr[i]);
    coinChangeNoDuplicacy(i + 1, arr, total, ansSoFar);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`5 12
2 3 5 6 7`);
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
