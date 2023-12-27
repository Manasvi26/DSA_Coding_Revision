let array = [22, 31, 31, 64, 87, 93, 101, 101, 103, 156, 167];
console.log("length --->", array.length);

//****** Array should be in sorted order to apply this ******//

let target = 101;

//if all the values are unique or if muliple same values are allowed and we can return any index which matches first
function binarySearch(arr, target) {
  let startPointer = 0;
  let endPointer = arr.length - 1;
  while (startPointer <= endPointer) {
    let midPointer = Math.floor(startPointer + (endPointer - startPointer) / 2);
    let midPointerValue = arr[midPointer];

    if (midPointerValue === target) {
      return midPointer;
    } else if (midPointerValue < target) {
      startPointer = midPointer + 1;
    } else {
      endPointer = midPointer - 1;
    }
  }

  return result;
}

//If there are multiple same values allowed and we need
// to return first smallest index
function binarySearchSmallestIndex(arr, target) {
  let startPointer = 0;
  let endPointer = arr.length - 1;
  let result = -1; //we need to maintain the result

  while (startPointer <= endPointer) {
    let midPointer = Math.floor(startPointer + (endPointer - startPointer) / 2);
    let midPointerValue = arr[midPointer];

    if (midPointerValue === target) {
      result = midPointer; //we store the value in result, so that if don't get any value further, we can return the already found value
      endPointer = midPointer - 1; //by doing this, we will search till the end
    } else if (midPointerValue < target) {
      startPointer = midPointer + 1;
    } else {
      endPointer = midPointer - 1;
    }
  }

  return result;
}

console.log(binarySearchSmallestIndex(array, target));
