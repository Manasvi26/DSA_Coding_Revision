function runProgram(input) {
  var input = input.split("\n");
  var cases = +input[0];

  var line = 1;
  for (let index = 0; index < cases; index++) {
    var n = +input[line++];

    var matrix = [];
    for (let i = 1; i <= n; i++) {
      var arr = input[line++].split(" ").map(Number);
      matrix.push(arr);
    }

    // console.log(matrix);
    var rotatedMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
      var row = [];
      for (let i = matrix.length - 1; i >= 0; i--) {
        row.push(matrix[i][j]);
      }
      rotatedMatrix.push(row);
    }
    // console.log(rotatedMatrix);

    for (let k = 0; k < rotatedMatrix.length; k++) {
      var eachLine = rotatedMatrix[k].join(" ");
      console.log(eachLine);
    }
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`2
4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
3
1 2 3
4 5 6
7 8 9`);
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
