function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);
  var cases = +input[0];

  var line = 1;
  for (let i = 0; i < cases; i++) {
    var old = input[line++].split(".").map(Number);
    var updated = input[line++].split(".").map(Number);
    // console.log(old);
    // console.log(updated);

    var check = "old";
    for (let j = 0; j < old.length; j++) {
      if (updated[j] > old[j]) {
        check = "updated";
        break;
      } else if (updated[j] < old[j]) {
        check = "old";
        break;
      }
    }
    // console.log(check);
    if (check === "updated") {
      console.log("True");
    } else {
      console.log("False");
    }
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`);
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
