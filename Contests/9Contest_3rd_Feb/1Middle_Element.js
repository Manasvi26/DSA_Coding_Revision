function runProgram(input) {
  var input = input.split("\n");
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);

  function findMiddleElement(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
      var check = true;
      for (let j = 0; j < arr.length; j++) {
        if (j < i && arr[j] > arr[i]) {
          check = false;
          break;
        }

        if (j > i && arr[j] < arr[i]) {
          check = false;
          break;
        }
      }

      if (check === true) {
        //   console.log(arr[i]);
        return arr[i];
      }
    }
    return -1;
  }

  console.log(findMiddleElement(arr));
}

if (process.env.USERNAME === "manas") {
  runProgram(`5
4 3 6 7 8`);
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
