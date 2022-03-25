var arr = [1, 1, 2, 2, 3, 4, 4];
//////////[0  1  2  3  4  5  6]

// var arr = [6, 7, 8, 9, 11];

function BS(arr) {
  var low = 0;
  var high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor(low + (high - low) / 2); //1st mid: 3  mid = 5;

    // console.log(mid);

    if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
      return mid;
    } else if (
      mid % 2 !== 0 &&
      arr[mid + 1] !== arr[mid] &&
      arr[mid - 1] !== arr[mid]
    ) {
      //   console.log("Here");
      low = mid + 1; //low = 4
    } else if (mid % 2 === 0 && arr[mid - 1] === arr[mid]) {
      high = mid - 1;
    }
  }
}

console.log(BS(arr));
