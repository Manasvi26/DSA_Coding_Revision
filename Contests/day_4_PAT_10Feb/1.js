function runProgram(input) {
  var input = input.split("\n");
  var [n, k] = input[0].split(" ").map(Number);
  //   console.log(n, k);
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);
  var arr1 = arr.slice(0, n);
  //   console.log(arr1);
  var arr2 = arr.slice(n, arr.length);
  //   console.log(arr2);

  var sumArr1 = 0;
  var sumArr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumArr1 = sumArr1 + arr1[i];
    sumArr2 = sumArr2 + arr2[i];
  }
  //   console.log(sumArr1);
  //   console.log(sumArr2);

  var aboluteDiff = Math.abs(sumArr1 - sumArr2);
  //   console.log(aboluteDiff);
  if (aboluteDiff < k) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`3 0
1 2 3 4 2 1`);
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
