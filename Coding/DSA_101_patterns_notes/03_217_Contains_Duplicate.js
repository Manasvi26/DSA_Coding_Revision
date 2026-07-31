// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

//Here brute force sol. would be.
//Checking every value twice.
//Time - O(n*2)
//Space - O(1) - No extra space needed

// Input: nums = [1,2,3,1]
//Optimal sol.
//Can use objects.

// var containsDuplicate = function (nums) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       return true;
//     } else {
//       obj[nums[i]] = 1;
//     }
//   }
//   return false;
// };

//Time: O(n)
//space: O(n)

//BEST: To use Set (as it is given to see that)

var containsDuplicate = function (nums) {
  const store = new Set();

  for (const num of nums) {
    if (store.has(num)) {
      return true;
    }
    store.add(num);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));

// NOTES: Question asks whether you've seen an element before?
// Think HashSet / HashMap.
