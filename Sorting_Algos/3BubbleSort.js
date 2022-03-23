var arr = [3, 9, 13, 6, 4, 1, 8];
// var arr = [2, 3, 4, 5, 6, 8, 9];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // var check = false;
    var max_index = i;
    console.log("arr", arr);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[max_index] > arr[j]) {
        swap(arr, max_index, j);
        // check = true;
      }
    }
    // if (check === false) {
    //   break;
    // }
    // console.log(arr);
  }
  return arr;
}

console.log(bubbleSort(arr));
