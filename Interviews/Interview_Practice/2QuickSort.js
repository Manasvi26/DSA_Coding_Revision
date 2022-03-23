// What is Quick Sort?
// Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

// If you need to sort large number of elements. So, the solution is to use Quick sort for large dataset.

var arr = [8, 4, 6, 1, 3, 75, 3, 4, 57, 8];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function partition(arr, i, j) {
  var pivotValue = arr[Math.floor(i + (j - i) / 2)]; //BEAWARE: THIS IS VALUE NOT AN INDEX; array[mid] ki value hai yeh!

  while (i <= j) {
    while (arr[i] < pivotValue) {
      i++;
    }

    while (pivotValue < arr[j]) {
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
    var index = partition(arr, left, right);

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
