function runProgram(input) {
  var input = input.split("\n");
  var cases = +input[0];

  var line = 1;
  for (let index = 0; index < cases; index++) {
    var n = +input[line++];
    var arr = input[line++].split(" ").map(Number);

    var product = -1;
    for (let i = 0; i < arr.length; i++) {
      var subArr = [];
      for (let j = i; j < arr.length; j++) {
        subArr.push(arr[j]);
        //   console.log(subArr);
        var subArrayProduct = 1;
        for (let k = 0; k < subArr.length; k++) {
          subArrayProduct = subArrayProduct * subArr[k];
        }
        if (subArrayProduct > product) {
          product = subArrayProduct;
        }
      }
    }
    //   console.log(product);
    if (product === -0) {
      console.log(0);
    } else {
      console.log(product);
    }
    // console.log("jgnkfjgnkdfjnagklngjlkngjdfkngkldfjngdgnj");
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`3
3
-3 0 -2
4
4 5 -1 2
5
-4 0 8 -1 7`);
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
