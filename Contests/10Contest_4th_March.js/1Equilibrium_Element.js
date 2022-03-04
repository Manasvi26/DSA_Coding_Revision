function runProgram(input) {
  var input = input.split("\n");
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);
  let i = 0;
  let j = arr.length - 1;
  let leftSum = arr[i];
  let rightSum = arr[j];
  while (i < j) {
    // console.log(i, j);
    // console.log("sum", leftSum, rightSum);
    if (leftSum < rightSum) {
      i++;
      leftSum = leftSum + arr[i];
    } else if (rightSum < leftSum) {
      //   console.log("inside j");
      j--;
      rightSum = rightSum + arr[j];
    } else {
      i++;
      j--;
    }
  }

  if (leftSum === rightSum) {
    console.log(i);
  } else {
    console.log(-1);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`5
4 2 5 5 3 8 1 7`);
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
