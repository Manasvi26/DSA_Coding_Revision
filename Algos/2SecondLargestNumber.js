let array = [2, 4, 5, 21, 32, 26, 41];
let array1 = [2, 4];
let array2 = [2];

function secondLarget(arr) {
  let firstLargest = -1;
  let secondLarget = -1;

  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      let currEl = arr[i];
      if (currEl > firstLargest) {
        secondLarget = firstLargest;
        firstLargest = currEl;
      }
    }
  }

  return secondLarget;
}

console.log(secondLarget(array2));

//currEl - 2 //lastCurr - 41
