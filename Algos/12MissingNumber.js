//https://leetcode.com/problems/missing-number/

// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example 1:

// let nums = [3, 0, 1];
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// let nums = [0, 1];
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

//Solution 1.
//Sort and then run a loop to find the missing number.
//TC: O(nlogn), SC: O(1);

//Soulution 2.
//Taking ideal sum without missing number, with looping till length(n+1). As one number is missing.
//Finding current sum.
//Taking out the difference to find out the missing number.
//TC: O(n), SC: O(1);

function missingNumber(nums) {
  let idealSum = 0;
  let presentSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    const element = nums[i];
    if (element) {
      presentSum += element;
    }
    idealSum += i;
  }

  return idealSum - presentSum;
}

//TC: O(n), SC: O(1);
console.log(missingNumber(nums));
