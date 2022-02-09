function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function partition(arr, i, j) {
  var pivot = arr[Math.floor(i + (j - i) / 2)];
  //   console.log(pivot);

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (pivot < arr[j]) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);

      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    var index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}

function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  var arr = input[1].split(" ").map(Number);
  var k = +input[2];
  //   console.log(arr);
  var arrSorted = quickSort(arr, 0, arr.length - 1);
  //   console.log(arrSorted);

  function check(arrSorted) {
    var i = 0;
    var j = 1;
    //   var check = "no";
    if (arr[i] === k) {
      return "yes";
    }

    if (arr[j] === k) {
      return "yes";
    }
    while (i < arrSorted.length - 1) {
      var sum = 0;
      for (let m = i; m <= j; m++) {
        sum = sum + arr[m];
      }

      if (sum === k) {
        return "yes";
      } else if (sum < k) {
        j++;
      } else if (sum > k) {
        i++;
      }
    }
    return "no";
  }
  console.log(check(arrSorted));
}

if (process.env.USERNAME === "manas") {
  runProgram(`9
4 9 7 10 2 8
5`);
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
