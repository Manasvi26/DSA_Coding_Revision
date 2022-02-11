// function runProgram(input) {
//   var input = +input;
//   //   console.log(input);
//   var arr = [];
//   for (var i = 1; i <= input; i++) {
//     arr.push(i);
//   }
//   //   console.log(arr);

//   var temp = [];

//   function subSets(arr, temp, k) {
//     if (temp.length === 0) {
//       console.log(temp.join(""));
//     }
//     for (var j = k; j < arr.length; j++) {
//       temp.push(arr[j]);
//       console.log(temp.join(" "));
//       subSets(arr, temp, j + 1);
//       temp.pop();
//     }
//   }
//   subSets(arr, [], 0);
// }

// if (process.env.USERNAME === "manas") {
//   runProgram(`3`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

var arr = [2, 4, 4, 6, 8];

var temp = [];

function subSets(arr, temp, k) {
  if (temp.length === 0) {
    console.log(temp.join(""));
  }
  for (var j = k; j < arr.length; j++) {
    temp.push(arr[j]);
    console.log(temp.join(" "));
    subSets(arr, temp, j + 1);
    temp.pop();
  }
}
subSets(arr, [], 0);
