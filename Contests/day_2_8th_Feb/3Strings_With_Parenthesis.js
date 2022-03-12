function runProgram(input) {
  var input = input;
  //   console.log(input);

  var arr = input.split("");
  //   console.log(arr);

  var stack = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "}" || arr[j] === "]" || arr[j] === ")") {
      if (
        (arr[j] === ")" && stack[stack.length - 1] !== "(") ||
        (arr[j] === "}" && stack[stack.length - 1] !== "{") ||
        (arr[j] === "]" && stack[stack.length - 1] !== "[")
      ) {
        break;
      } else {
        //   console.log("x");
        stack.pop();
      }
    } else if (arr[j] === "{" || arr[j] === "[" || arr[j] === "(") {
      stack.push(arr[j]);
    }
    //   console.log(stack);
  }
  if (!stack.length) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

// 3
// {[()]}
// {[(])}
// {{[[(())]]}}

if (process.env.USERNAME === "manas") {
  runProgram(`{[(])}`);
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

// wrong solution
// function runProgram(input) {
//   var input = input.split("\n");
//   //   console.log(input);
//   for (let i = 1; i < input.length; i++) {
//     var arr = input[i].split("");
//     // console.log(arr);

//     var stack = [];

//     for (let j = 0; j < arr.length; j++) {
//       if (
//         !stack.length &&
//         (arr[j] === "}" || arr[j] === "]" || arr[j] === ")")
//       ) {
//         stack.push(arr[i]);
//         break;
//       } else if (arr[j] === "{" || arr[j] === "[" || arr[j] === "(") {
//         stack.push(arr[i]);
//       } else if (arr[j] === "}" || arr[j] === "]" || arr[j] === ")") {
//         stack.pop();
//       }
//       //   console.log(arr[i], stack);
//     }
//     if (!stack.length) {
//       console.log("balanced");
//     } else {
//       console.log("not balanced");
//     }
//   }
// }

// if (process.env.USERNAME === "manas") {
//   runProgram(`3
// ){(){[])}]
// ]]])}[(}}{
// {{}}
// [(){}{())[
// [}]{(}[[}[`);
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
