//Notes: https://www.guru99.com/quicksort-in-javascript.html

// What is Quick Sort?
// Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

//T.C => O(nlogn); (worst case);

//***************** MOST IMPORTANT ***************

//**** Works on the idea that, an element thinks, ki "mujhe" chote sare elements
//left side ho, aur "mujhe" bade sare elements right side ho. Baki element
//apna dekh lenge, mujhe bas apna dekhna hai **************.

//***************** MOST IMPORTANT ***************

// First select an element which is to be called as pivot element.
// Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it’s left and greater than pivot is to it’s right.
// Finally, perform the same operations on left and right side elements to the pivot element.

var arr = [3, 9, 2, 6, 13, 11, 5, 8, 4];

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
// var swapped = swap(arr, 1, 5);
// console.log(swapped);

//here we compare values
function getPartitionIndex(arr, leftPointer, rightPointer) {
  var pivotValue =
    arr[Math.floor(leftPointer + (rightPointer - leftPointer) / 2)]; //here we need the value, not the index, be carefull!
  // console.log("pivotValue --->", pivotValue);

  while (leftPointer <= rightPointer) {
    while (arr[leftPointer] < pivotValue) {
      leftPointer++;
    }
    while (pivotValue < arr[rightPointer]) {
      rightPointer--;
    }

    //here " = " ("equal to" is necessary because we finally need to increament the pointers, even when they are on same element)
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

// console.log(partition(arr, 0, arr.length - 1));

//here we compare pointers
function quickSort(arr, leftPointer, rightPointer) {
  if (arr.length > 1) {
    var partitionIndex = getPartitionIndex(arr, leftPointer, rightPointer); //here left and right are pointers

    if (leftPointer < partitionIndex - 1) {
      quickSort(arr, leftPointer, partitionIndex - 1); //"quickSort" on arr, from left to index-1;
    }

    if (partitionIndex < rightPointer) {
      quickSort(arr, partitionIndex, rightPointer); //"quickSort" on arr, from index-1 to right;
    }
  }

  return arr; //this is actually just the base case return
}

console.log(quickSort(arr, 0, arr.length - 1));
