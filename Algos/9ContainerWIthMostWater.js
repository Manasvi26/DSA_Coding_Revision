// https://leetcode.com/problems/container-with-most-water/

// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// let height = [1, 1];
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

//Solution 1. Brute force.
//Running two loops, calculating the water with "lowerNumber * distance".
//Maintaing the maxWater, if greater.

//Time comp: O(N), S.C: O(1);

//Solutin 2.
//With two pointers approach.
//Calculating and moving the lower value pointer inside.
//Doing till both the pointers cross.

function maxWater(height) {
  let i = 0;
  let j = height.length - 1;
  let maxWater = 0;

  while (i < j) {
    let containerLeft = height[i];
    let containerRight = height[j];
    let distance = j - i;

    let currentStorage = Math.min(containerLeft, containerRight) * distance;

    if (currentStorage > maxWater) {
      maxWater = currentStorage;
    }

    if (containerLeft < containerRight) {
      i++;
    } else {
      j--;
    }
  }

  return maxWater;
}

console.log(maxWater(height));
