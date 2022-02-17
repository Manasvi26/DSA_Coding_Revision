var prices = [1, 12, 5, 111, 200, 1000, 10];
var k = 50;

function maximumToys(prices, k) {
  var sortedArr = prices.sort((a, b) => {
    return a - b;
  });

  //   console.log(sortedArr);

  var sum = 0;
  var count = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    var sum = sum + sortedArr[i];

    if (sum > k) {
      break;
    }

    count++;
  }
  return count;
}

console.log(maximumToys(prices, k));
