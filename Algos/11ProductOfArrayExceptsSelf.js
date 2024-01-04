//https://leetcode.com/problems/product-of-array-except-selflet

// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]
// Example 2:

// let nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

//Solution 1.
//By brute force. Running sendond loop and multiply all
//except self.
//TC: O(N*2) and SP: O(N) as we are making a new array of same length.

//Solution 2:

// let nums = [1, 2, 3, 4, 5];

function productOfTheArrayExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);
  let productLeft = 1;
  let productRight = 1;
  for (let i = 1; i < nums.length; i++) {
    productLeft = productLeft * nums[i - 1];
    result[i] = productLeft;
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    productRight = productRight * nums[j + 1];
    result[j] = result[j] * productRight;
  }

  return result;
}
console.log(productOfTheArrayExceptSelf(nums));
