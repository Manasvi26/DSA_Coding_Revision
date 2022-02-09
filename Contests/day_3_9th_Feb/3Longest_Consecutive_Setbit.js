function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  for (let m = 1; m < input.length; m++) {
    var num = +input[m];
    //   console.log(num);
    var binary = num.toString(2);
    console.log(binary);
    var count = 0;
    var i = 0;
    while (i < binary.length) {
      if (binary[i] === "1") {
        var j = i;
        var caseCount = 0;
        while (binary[j] === "1") {
          caseCount++;
          j++;
        }
      }
      if (caseCount > count) {
        count = caseCount;
      }
      i++;
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`1
0`);
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
