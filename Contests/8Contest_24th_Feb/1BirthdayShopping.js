function runProgram(input) {
  var [n, limit] = input.split(" ").map(Number);
  //   console.log(n, limit);
  var arr = [];
  for (let index = 1; index <= n; index++) {
    arr.push(index);
  }
  //   console.log(arr);

  var temp = [];
  function subSets(arr, temp, k) {
    for (let i = k; i < arr.length; i++) {
      temp.push(arr[i]);
      if (temp.length === limit) {
        console.log(temp.join(" "));
      }
      subSets(arr, temp, i + 1);
      temp.pop();
    }
  }
  subSets(arr, temp, 0);
}

if (process.env.USERNAME === "manas") {
  runProgram(`4 1`);
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
