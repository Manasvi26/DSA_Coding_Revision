//Sort the array. Will be sorted in O(NlogN)
//Best sol: Dutch national flag question(in O(N)).

//Works as
//1.Towards the left of low, everything will be zero.
//2. Towards the right of high, everything will be two.
//3. In between low and mid-1 is one.

// let arr = [0, 2, 1, 0, 0, 1];

//Case 2.
let arr = [2, 1, 0, 2, 0, 1];

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function dutchNationalFlagSort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
}

console.log(dutchNationalFlagSort(arr));
