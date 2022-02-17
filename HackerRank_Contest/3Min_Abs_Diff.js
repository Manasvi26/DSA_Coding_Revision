// var arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]; //1
// var arr = [3, -7, 0]; //3
var arr = [1, -3, 71, 68, 17]; //3

function minimumAbsoluteDifference(arr) {
  // Write your code here
  //   console.log(arr);

  var sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  //   console.log(sortedArr);

  var minDiff = Infinity;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    var absDiff = Math.abs(sortedArr[i] - sortedArr[i + 1]);

    // console.log(absDiff);
    if (minDiff > absDiff) {
      minDiff = absDiff;
    }
  }

  return minDiff;
}

// minimumAbsoluteDifference(arr);

console.log(minimumAbsoluteDifference(arr));
