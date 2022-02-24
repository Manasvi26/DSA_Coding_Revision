function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    var n = input[line++];
    var arr = input[line++].split("");
    // console.log(arr);

    var obj = {};

    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]] === undefined) {
        obj[arr[j]] = 1;
      } else {
        obj[arr[j]] = obj[arr[j]] + 1;
      }
    }
    // console.log(obj);

    var count = 0;
    for (const key in obj) {
      if (obj[key] % 2 === 1) {
        count++;
        if (count > 1) {
          break;
        }
      }
    }
    if (count > 1) {
      console.log("Not Possible!");
    } else {
      console.log("Possible!");
    }
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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
