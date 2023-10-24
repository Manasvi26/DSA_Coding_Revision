// var arr = [3, 9, 7, 2, 1, 5, 8];
var arr = [64, 34, 25, 12, 22, 11, 90];

function swap(arr, i, minIndex) {
  var temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

function slectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    let minimum_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log("min_el", arr[minimum_index]);
      if (arr[minimum_index] > arr[j]) {
        minimum_index = j; //this step
      }
    }
    if (minimum_index !== i) {
      //this above condition is important optimisation
      swap(arr, i, minimum_index);
    }
  }
  return arr;
}

console.log(slectionSort(arr));
