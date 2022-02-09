function runProgram(input) {
  var input = input.split("\n");
  // console.log(input);
  var [n, k] = input[0].split(" ").map(Number);
  // console.log(k);
  var arr = input[1].split(" ").map(Number);
  // console.log(arr);

  function BS(arr, k) {
    var start = 0;
    var end = arr.length - 1;

    while (start <= end) {
      var mid = Math.floor(start + (end - start) / 2);
      // console.log(mid);

      if (arr[mid] === k) {
        start++;
      } else if (arr[mid] < k) {
        start++;
      } else {
        end--;
      }
    }
    return mid;
  }
  console.log(BS(arr, k));
}

if (process.env.USERNAME === "manas") {
  runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`);
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
