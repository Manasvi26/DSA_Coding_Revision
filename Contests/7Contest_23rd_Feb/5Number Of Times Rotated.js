// console.log(NumberOfRotations(arr));

function runProgram(input) {
  var input = input.split("\n");
  var array = input[1].split(" ").map(Number);
  //   console.log(array);
  function NumberOfRotations(array) {
    var low = 0;
    var high = array.length - 1;

    while (low <= high) {
      var mid = Math.floor(low + (high - low) / 2);
      // console.log(mid, array[mid]);

      if (mid === array.length - 1) {
        //for sorted array and also for length = 1 //edge cases
        return 0;
      } else if (array[mid] < array[mid - 1] && array[mid] < array[mid + 1]) {
        return mid;
      } else if (array[mid] >= array[0]) {
        low = mid + 1;
      } else if (array[mid] <= array[0]) {
        //or (array[mid] <= array[array.length-1])
        high = mid - 1;
      }
    }
    return array.length - 1; //for reversed array //edge case
  }
  var numberOfTimesRotated = NumberOfRotations(array);
  //   console.log(numberOfTimesRotated);
  if (numberOfTimesRotated > 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`6
3 4 7 9 1 2`);
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
