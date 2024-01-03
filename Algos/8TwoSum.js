// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// let nums = [2, 7, 11, 15];
// let target = 9;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// let nums = [3, 2, 4];
// let target = 6;
// Output: [1,2]
// Example 3:

let nums = [3, 3];
let target = 6;
// Output: [0,1]

// let nums = [3, 2, 4, 1, 7];
// let target = 3;

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// Solution 1. O(n*2)
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// console.log(twoSum(nums, target));

// Time complexity: O(N*2) and Space complexity: O(1)

////////////////////////////////////////////////////////////////////////

//Solution 2. With sorting, Time complexity: O(NlogN) and Space: O(N)

// function twoSum(nums, target) {
//   let originalArr = [...nums];
//   var sortedArr = originalArr.sort((a, b) => a - b);
//   let i = 0;
//   let j = sortedArr.length - 1;
//   let number1;
//   let number2;
//   while (i < j) {
//     let sum = sortedArr[i] + sortedArr[j];
//     if (sum < target) {
//       i++;
//     } else if (sum > target) {
//       j--;
//     } else {
//       number1 = sortedArr[i];
//       number2 = sortedArr[j];
//       break;
//     }
//   }

//   let index1;
//   let index2;
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] === number1 && !index1 && index1 !== 0) {
//       index1 = index;
//     } else if (nums[index] === number2 && !index2) {
//       index2 = index;
//     }

//     if (index1 && index2) {
//       break;
//     }
//   }

//   return [index1, index2];
// }

// Time complexity: O(NlogN) and Space complexity: O(N)

//////////////////////////////////////////////////////////////

//Solution 3. With Hash maps

function twoSum(nums, target) {
  let myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    }

    myMap.set(nums[i], i);
  }

  return [];
}

// so, this is working on :
//=> sum (or target) = a + b;

//=> sum - b = a;
//or
//=> a = sum - b;

// Time complexity: O(N) and Space complexity: O(N)

// console.log(twoSum(nums, target));
