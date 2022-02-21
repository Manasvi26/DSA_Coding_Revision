function runProgram(input) {
  var input = input.split("\n");
  // console.log(input);
  let cases = +input[0];

  var line = 1;
  for (let i = 0; i < cases; i++) {
    let [n, m] = input[line++].split(" ").map(Number);
    // console.log(m);
    let arr = input[line++].split(" ").map(Number);
    // console.log(arr);

    let j = 0;
    while (m !== 0 && j < arr.length) {
      if (arr[j] !== 1 && arr[j - 1] !== 1 && arr[j + 1] !== 1) {
        arr[j] = 1; //this is the most important step
        // console.log(j);
        m--;
      }
      j++;
    }
    if (m === 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`1
5 1
1 2 3 4 5`);
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
