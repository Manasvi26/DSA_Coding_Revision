// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the
// range[1, n], return an array of all the integers in the range[1, n]
// that do not appear in nums.

// Example 1:

// let nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// let nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Follow up: Could you do it without extra space and in O(n) runtime ?
// You may assume the returned list does not count as extra space.

//Solution 1.
//Brute force. Two loop. Check with second one.TC: O(N*2) S.C. O(1).

//Solution 2.
//Sort the array and comapare with index. Number not equal to index is missing.
//T.C: O(NlogN) for sorting. S.C: O(1); Will sort the original array itself.

//Solution 3.
//Making an arr = new Array(nums.lenght).fill(0);
//With first loop fill the index as per value. Duplicate numbers index
//will be overwritten.
//With second (seperate loop) loop, check the indexs still having zero and push
//the indexs. We got our missing numbers.
//T.C: O(N) for sorting. S.C: O(N), for having a new array.

//Solution 4.
//Making a set and check with numSet.has() method.
// var findDisappearedNumbers = function (nums) {
//   const numSet = new Set(nums);
//   const result = [];

//   for (let i = 1; i <= nums.length; i++) {
//     if (!numSet.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// };
// Time Complexity: O(N), where N is the length of the input array.
// Space Complexity: O(N) for the set.

//Solution 5.

let nums = [3, 2, 2, 2, 2];
var findDisappearedNumbers = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  //   console.log("nums --->", nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(findDisappearedNumbers(nums));
