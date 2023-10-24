//Notes: https://www.guru99.com/quicksort-in-javascript.html

// What is Quick Sort?
// Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

//T.C => O(nlogn); (worst case);

var arr = [3, 9, 2, 6, 4, 4, 4, 5, 8];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
// var swapped = swap(arr, 1, 5);
// console.log(swapped);

function partition(arr, i, j) {
  var pivot = arr[Math.floor(i + (j - i) / 2)]; //here we need the value, not the index, be carefull!
  //   console.log(pivot);

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (pivot < arr[j]) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);

      i++;
      j--;
    }
  }
  return i;
}

// console.log(partition(arr, 0, arr.length - 1));

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    var index = partition(arr, left, right); //here left and right are pointers

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }

    if (index < right) {
      quickSort(arr, index, right);
    }
  }

  return arr;
}

console.log(quickSort(arr, 0, arr.length - 1));
