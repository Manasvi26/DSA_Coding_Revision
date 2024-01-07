// https://leetcode.com/problems/rotate-array/

// 189. Rotate Array
// Medium
// 17K
// 1.9K
// Companies
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// let nums = [-1, -100, 3, 99];
// let k = 2;
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

let nums = [1, 2];
let k = 5;

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

//Best solution: TC: O(N) and SC: O(1);
//Approach:
//First we reverse the entire arr.
//Then we reverse first "K" elements seperately
//Then we reverse remaining elemets seperately
function rotateByK(nums, k) {
  function reverse(arr, left, right) {
    while (left <= right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }

    return arr;
  }

  let rotations;
  if (k > nums.length) {
    rotations = k % nums.length;
  } else if (k === 0 || k === nums.length) {
    return nums;
  } else {
    rotations = k;
  }

  reverse(nums, 0, nums.length - 1);

  reverse(nums, 0, rotations - 1);

  reverse(nums, rotations, nums.length - 1);

  return nums;
}
console.log(rotateByK(nums, k));
