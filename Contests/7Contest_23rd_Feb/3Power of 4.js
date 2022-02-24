function runProgram(input) {
  var n = +input;
  //   console.log(n);

  function powerOf4(n) {
    return n ** 4;
  }

  console.log(powerOf4(n));
}

if (process.env.USERNAME === "manas") {
  runProgram(`3`);
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
