let arr = [2, 5, 6, [5, 93, 63], 84, 69, [92, 3], [5, 9, 0, [4, 26, 8]], 100];

function flattenThisArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(...flattenThisArray(arr[i]));
    }
  }

  return result;
}

console.log(flattenThisArray(arr));
