var arr = [3, 9, 7, 2, 1, 5, 8];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    var minimum_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log("min_el", arr[minimum_index]);
      if (arr[minimum_index] > arr[j]) {
        swap(arr, minimum_index, j);
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));
