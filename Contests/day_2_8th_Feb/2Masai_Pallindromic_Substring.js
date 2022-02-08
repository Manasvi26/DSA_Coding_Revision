function reverse(str) {
  var reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
}

// console.log("hiiii", reverse("appa"));

function runProgram(input) {
  var S = input;
  //   console.log(S);

  var maxLength = 0;
  for (let i = 0; i < S.length; i++) {
    var subString = "";
    for (let j = i; j < S.length; j++) {
      subString = subString + S[j];
      //   console.log(subString);

      var reverseSubString = reverse(subString);

      if (subString === reverseSubString) {
        if (reverseSubString.length > maxLength) {
          maxLength = reverseSubString.length;
        }
      }
    }
  }
  console.log(maxLength);
}

if (process.env.USERNAME === "manas") {
  runProgram(`thisracecarisgood`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (S) {
    read += S;
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
