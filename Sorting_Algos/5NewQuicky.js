var arr = [3, 9, 2, 6, 13, 11, 5, 8, 4];

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function getPartitionIndex(arr, leftPointer, rightPointer) {
  let pivotValue =
    arr[Math.floor(leftPointer + (rightPointer - leftPointer) / 2)];
  // arr[Math.floor(leftPointer + (rightPointer - leftPointer) / 2)];

  while (leftPointer <= rightPointer) {
    //pivotValue is "value" and we will comare it with value
    while (arr[leftPointer] < pivotValue) {
      leftPointer++;
    }

    //pivotValue is "value" and we will comare it with value
    while (pivotValue < arr[rightPointer]) {
      rightPointer--;
    }

    if (leftPointer <= rightPointer) {
      if (leftPointer !== rightPointer) {
        swap(arr, leftPointer, rightPointer);
      }

      leftPointer++;
      rightPointer--;
    }
  }

  return leftPointer;
}

function quickSort(arr, leftPointer, rightPointer) {
  //base case
  if (arr.length > 1) {
    let partitionIndex = getPartitionIndex(arr, leftPointer, rightPointer);

    //here, partitionIndex-1 will be taken in below lines
    if (leftPointer < partitionIndex - 1) {
      quickSort(arr, leftPointer, partitionIndex - 1);
    }

    if (partitionIndex < rightPointer) {
      quickSort(arr, partitionIndex, rightPointer);
    }
  }

  return arr;
}

console.log(quickSort(arr, 0, arr.length - 1));
