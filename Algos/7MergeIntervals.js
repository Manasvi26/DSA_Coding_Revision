//Link: https://leetcode.com/problems/merge-intervals/

// 56. Merge Intervals

// Medium
// 21.4K
// 732
// Companies
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

let arr = [
  [1, 3],
  [2, 5],
  [4, 7],
];

let arr1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

// [1, 3, 2, 6, 8, 10, 15, 18];

let arr2 = [
  [1, 4],
  [0, 4],
];

// [1, 4, 0, 4];

//[1,6],[2,6],[8,10],[15,18]

function sortArr(arr) {
  let sortedArr = arr.sort((a, b) => a[0] - b[0]);
  return sortedArr;
}

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const previousInterval = result[result.length - 1];
    const currentInterval = intervals[i];

    if (currentInterval[0] <= previousInterval[1]) {
      //this will be a shallow copy here, so changing this will change the main array itself, as they are referring to same memory location.
      previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

console.log("--->", mergeIntervals(arr2));
