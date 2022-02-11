function runProgram(input) {
  var input = input.split("\n");
  //   console.log(input);

  for (let i = 2; i < input.length; i += 2) {
    var arr = input[i].split(" ").map(Number);
    // console.log(arr);

    function maxToLeft(array) {
      var res = [];
      var stack = [];

      for (let i = 0; i < arr.length; i++) {
        if (!stack.length) {
          res.push(-1);
          stack.push(arr[i]);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
          res.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
          while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
          }
          if (stack.length === 0) {
            res.push(-1);
          } else {
            res.push(stack[stack.length - 1]);
          }
        }

        if (!stack.length || arr[i] > stack[stack.length - 1]) {
          stack.push(arr[i]);
        }

        // console.log("stack", stack);
      }
      return res;
    }

    var leftMaxArray = maxToLeft(arr);
    console.log("leftMaxArray", leftMaxArray);

    //making an array of maximums to right

    function maxToRight(array) {
      var res = [];
      var stack = [];

      for (let i = arr.length - 1; i >= 0; i--) {
        if (!stack.length) {
          res.push(-1);
          stack.push(arr[i]);
        } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
          res.push(stack[stack.length - 1]);
        } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
          while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
          }
          if (stack.length === 0) {
            res.push(-1);
          } else {
            res.push(stack[stack.length - 1]);
          }
        }

        if (!stack.length || arr[i] > stack[stack.length - 1]) {
          stack.push(arr[i]);
        }

        // console.log("stack", stack);
      }
      return res;
    }

    var rightMaxArray = maxToRight(arr).reverse();
    console.log("rightMaxArray", rightMaxArray);

    //making a function to make an array of water above each building
    function waterAboveEachBuilding(arr1, arr2, arr3) {
      var waterArr = [];

      for (let i = 0; i < arr1.length; i++) {
        water = Math.min(arr1[i], arr2[i]) - arr3[i];

        waterArr.push(water);
      }

      return waterArr;
    }

    var totalWaterArray = waterAboveEachBuilding(
      leftMaxArray,
      rightMaxArray,
      arr
    );
    console.log("totalWaterArray", totalWaterArray);

    //adding the water for each to get total amount of water tapped
    function rainWaterTapped(array) {
      var sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
          sum = sum + array[i];
        }
      }

      return sum;
    }

    var totalWaterTapped = rainWaterTapped(totalWaterArray);
    console.log("totalWaterTapped", totalWaterTapped);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`2
5
3 2 0 4 6
7
7 0 3 6 2 3 5`);
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
