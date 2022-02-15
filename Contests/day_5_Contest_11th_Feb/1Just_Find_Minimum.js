function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);
  var stack = [];
  var arr = [];
  for (let i = 1; i < input.length; i++) {
    var line = input[i].split(" ");
    arr.push(line);
  }
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "PUSH") {
      var num = +arr[i][1];
      stack.push(num);
    } else if (arr[i][0] === "POP") {
      if (!stack.length) {
        console.log("EMPTY");
      } else {
        stack.pop();
      }
    } else if (arr[i][0] === "MIN") {
      if (!stack.length) {
        console.log("EMPTY");
      } else {
        var min = stack[0];
        for (let j = 0; j < stack.length; j++) {
          if (stack[j] < min) {
            min = stack[j];
          }
        }
        console.log(min);
      }
    }
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`11
PUSH 5
PUSH 7
PUSH 3
PUSH 8
PUSH 10
MIN
POP
POP
MIN
POP
MIN`);
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
