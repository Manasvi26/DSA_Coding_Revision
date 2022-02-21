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

// console.log(NumberOfRotations(arr));

// var minimumIndex = NumberOfRotations(arr);
// console.log(minimumIndex);

function FindingTheElement(array, k, minimumIndex) {
  if (minimumIndex === 0) {
    var low = 0;
    var high = array.length - 1;
  } else if (minimumIndex === array.length - 1) {
    //means the array is reversed
    //////////////////////////////////////////////code for reversed array
    var low = 0;
    var high = array.length - 1;
    // console.log("here");
    while (low <= high) {
      var mid = Math.floor(low + (high - low) / 2);

      if (k === array[mid]) {
        return mid;
      } else if (array[mid] < k) {
        //only comparison sign reversed
        high = mid - 1;
      } else if (array[mid] > k) {
        //only comparison sign reversed
        low = mid + 1;
      }
    }
    return -1;
    ///////////////////////////////////////////till here for reversed array
  } else if (k >= array[0]) {
    var low = 0;
    var high = minimumIndex - 1;
  } else if (k <= array[0]) {
    var low = minimumIndex; //minimumIndex wale ko include karenge
    var high = array.length - 1;
  }

  //code for simple binary search
  while (low <= high) {
    var mid = Math.floor(low + (high - low) / 2);

    if (k === array[mid]) {
      return mid;
    } else if (array[mid] > k) {
      high = mid - 1;
    } else if (array[mid] < k) {
      low = mid + 1;
    }
  }
  return -1;
}

// console.log(FindingTheElement(arr, 4, minimumIndex));

function runProgram(input) {
  var input = input.split("\n");

  var [n, k] = input[0].split(" ").map(Number);
  //   console.log(k);
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);

  var minimumIndex = NumberOfRotations(arr);

  console.log(FindingTheElement(arr, k, minimumIndex));
}

if (process.env.USERNAME === "manas") {
  runProgram(`5 1
3 4 5 1 2`);
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
