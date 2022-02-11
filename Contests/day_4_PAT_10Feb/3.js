// var array = [2, 4, 4];
// var sumTotal = sum(array);
// console.log(sumTotal);

function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  var [n, givenSum] = input[0].split(" ").map(Number);
  //   console.log(n, k);
  var arr = input[1].split(" ").map(Number);
  //   console.log(arr);
  var temp = [];

  var newArr = [];
  function subSets(arr, temp, k) {
    for (var j = k; j < arr.length; j++) {
      temp.push(arr[j]);
      //   console.log(temp.join(" "));
      function sum(array) {
        sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum = sum + array[i];
        }
        return sum;
      }

      var innerSum = sum(temp);
      //   console.log(innerSum);
      if (innerSum === givenSum) {
        newArr.push(temp);
        console.log(temp.join(" "));
      }

      //   console.log(temp);
      subSets(arr, temp, j + 1);
      temp.pop();
    }
    // return newArr;
    return newArr;
  }
  //   console.log(newArr);
  var resultArr = subSets(arr, [], 0);
  console.log(resultArr);
}

// 2 4 4
// 2 8
// 4 6
if (process.env.USERNAME === "manas") {
  runProgram(`5 10
2 4 4 6 8`);
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
