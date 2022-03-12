// var num = 57;

// var numStr = num.toString();
// var numStrArr = [numStr];
// function addNumString(params) {
//   //   console.log(numStr);
//   var sum = numStrArr[length - 1];
//   for (let i = 0; i < numStrArr[length - 1]; i++) {
//     sum = sum + numStrArr[length - 1][i];
//   }

//   console.log(sum);
// }

// addNumString();

var str = "abcdefghijkl";

var child = "defrh";

for (let i = 0; i <= str.length - child.length; i++) {
  var check = false;
  var subStr = "";
  for (let j = i; j < child.length + i; j++) {
    subStr = subStr + str[j];
  }
  console.log(subStr);
  if (child === subStr) {
    check = true;
    break;
  }
}

if (check) {
  console.log("Accept");
} else {
  console.log("Not Accepted");
}
