var arr = [3, 9, 2, 6, 4, 5, 8];

// Merge sort is a divide - and - conquer sorting algorithm that
// works by dividing an array into smaller, sorted sub - arrays
// and then merging those sub - arrays to produce a final, sorted array.
// It has a time complexity of O(n log n) and is a stable sorting algorithm.

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base case ***IMPORTANT***

  let mid = Math.floor(arr.length / 2); //mid-point-index

  var leftArr = mergeSort(arr.slice(0, mid)); //"mergeSort" the left part array (left smaller array by dividing)
  var rightArr = mergeSort(arr.slice(mid)); //"mergeSort" the right part array (right smaller array by dividing)
  return merge(leftArr, rightArr); //return "merge function" to merge (join) the sorted parts (i.e. merge two sorted arrays)
}

function merge(leftArray, rightArray) {
  let mergedArr = [];
  while (leftArray.length && rightArray.length) {
    leftArray[0] < rightArray[0]
      ? mergedArr.push(leftArray.shift())
      : mergedArr.push(rightArray.shift());
  }
  while (leftArray.length) {
    mergedArr.push(leftArray.shift());
  }

  while (rightArray.length) {
    mergedArr.push(rightArray.shift());
  }

  return mergedArr;
}

console.log(mergeSort(arr));

//SECOND METHOD

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let midIndex = Math.floor(arr.length / 2);

//   let leftArr = mergeSort(arr.slice(0, midIndex));
//   let rightArr = mergeSort(arr.slice(midIndex));

//   return merge(leftArr, rightArr);
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];

//   let leftIndex = 0;
//   let rightIndex = 0;

//   //HERE TO CHECK THAT THE INDEXS ARE SMALLER THAN LENGTH ARE VERY IMPORTANT
//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       sortedArr.push(leftArr[leftIndex]);
//       leftIndex++; //here this is needed, as push() is there
//     } else {
//       sortedArr.push(rightArr[rightIndex]);
//       rightIndex++; //here this is needed, as push() is there
//     }
//   }

//   //here concat() method is used with slice. Here also, leftIndex
//   //  and rightIndex plays a big part, as we used.push()
//   // above.
//   return sortedArr.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
// }

// console.log(mergeSort(arr));

//////////////////////////////////////////////////////
// IMPORTANMT POINTS TO KEEP IN MIND
//write the base case at first
//.shift() changes the original array, while .push()
// only takes the elementmentioned inside it and
// original array remains intact
