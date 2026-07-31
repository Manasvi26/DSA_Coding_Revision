// Two Sum
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//Simple brute force solution would be, running two loops and checking
//for every number.

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([3, 3], 6));
//O(n*2) time complexity
//O(1) - Space

//Now optimal solution
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (map.has(needed)) {
      return [map.get(needed), i];
    } else {
      map.set(nums[i], i);
    }
  }
};
console.log(twoSum([2, 7, 10, 5, 6], 13));

//Time = O(n)
//Space = O(n)
// NOTES:
// Interview Pattern to Remember

// Whenever you encounter:

// Find a pair
// Find a complement (target - current)
// Need fast lookup
// Check whether you've seen something before
// Detect duplicates or frequencies

// Think:

// Can I use a HashMap to replace repeated searching?

// This single insight unlocks many high-frequency interview problems.
