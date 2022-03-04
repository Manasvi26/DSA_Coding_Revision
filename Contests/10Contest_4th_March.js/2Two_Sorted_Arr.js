function runProgram(input) {
  var input = input.split("\n");
  var cases = input[0];

  let line = 1;
  for (let k = 0; k < cases; k++) {
    let n = +input[line++];
    let arr1 = input[line++].split(" ").map(Number);
    let arr2 = input[line++].split(" ").map(Number);
    // console.log(arr1);
    // console.log(arr2);

    //HERE GIVEN ARRAY IS SORTED
    let i = 0;
    let j = arr2.length - 1;
    let count = 0;
    while (i < arr1.length && j >= 0) {
      if (arr1[i] === arr2[j]) {
        count++;
        i++;
        j--;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr1[i]) {
        j--;
      }
    }
    console.log(count);

    //APPROCH (WHEN ARRAY IS UN-SORTED)

    // var obj1 = {};
    // for (let i = 0; i < arr1.length; i++) {
    //   if (obj1[arr1[i]] === undefined) {
    //     obj1[arr1[i]] = 1;
    //   } else {
    //     obj1[arr1[i]] = obj1[arr1[i]] + 1;
    //   }
    // }
    // console.log(obj1);

    // var obj2 = {};
    // for (let i = 0; i < arr2.length; i++) {
    //   if (obj2[arr2[i]] === undefined) {
    //     obj2[arr2[i]] = 1;
    //   } else {
    //     obj2[arr2[i]] = obj2[arr2[i]] + 1;
    //   }
    // }
    // console.log(obj2);

    // var count = 0;
    // for (const key in obj1) {
    //   if (obj2[key] === undefined) {
    //     continue;
    //   } else {
    //     count++;
    //   }
    // }
    // console.log(count);
  }
}

if (process.env.USERNAME === "manas") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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
