function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  var cases = +input[0];
  var line = 1;
  for (let i = 0; i < cases; i++) {
    var n = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    // console.log(arr);
    // arr.sort();
    // console.log(arr);

    var candyArr = [];

    if (arr[0] > arr[1]) {
      candyArr.push(2);
    } else {
      candyArr.push(1);
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1] || arr[i] > arr[i + 1]) {
        var more = candyArr[candyArr.length - 1] + 1;
        candyArr.push(more);
      } else {
        candyArr.push(1);
      }
    }
    // console.log(candyArr);
    var minNumOfCandiesRequired = 0;
    for (let j = 0; j < candyArr.length; j++) {
      minNumOfCandiesRequired = minNumOfCandiesRequired + candyArr[j];
    }
    console.log(minNumOfCandiesRequired);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`4
3 
1 0 3 6 5 3
3
1 3 2
3
1 2 3
8
12 4 3 11 34 34 1 67`);
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
