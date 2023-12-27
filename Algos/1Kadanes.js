var array1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //6

var array2 = [5, 4, -1, 7, 8]; //23

var array3 = [3];

// Approach 1

function maximumSum(arr) {
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum = currentSum + arr[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}

//This approach has time complexity of O(n*2);
// console.log(maximumSum(array1));

//Approach 2: Kadanes Algorithm

function kadanesMaximumSum(arr) {
  let maxSum = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
}

//This approach has time complexity of O(n);
console.log("kadanes result --->", kadanesMaximumSum(array1));
