var arr = [3, 9, 2, 6, 4, 5, 8];

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base case

  let mid = Math.floor(arr.length / 2);

  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let mergedArr = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? mergedArr.push(left.shift())
      : mergedArr.push(right.shift());
  }
  while (left.length) {
    mergedArr.push(left.shift());
  }

  while (right.length) {
    mergedArr.push(right.shift());
  }

  return mergedArr;
}

console.log(mergeSort(arr));
