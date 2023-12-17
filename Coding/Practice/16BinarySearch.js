const arr = [3, 5, 6, 44, 32, 32, 56, 65, 87];
//First condition is array needs to be sorted.
//Time complexity : O(log n);
//Space complexity : O(1); As space is not dependent on any input. It will be constant.

const target = 6;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(arr, target));
