var weight = [10, 20, 30];

var value = [60, 100, 120];
var n = weight.length;
var w = 50;

var dp = Array(200).fill(0);
for (let i = 0; i < dp.length; i++) {
  dp[i] = Array(200).fill(0);
}

// console.log(dp);

function topDownKnapsack(weight, value, i, j, dp) {
  if (i === 0 || j === 0) {
    //replace n-> i and w -> j

    return (dp[i][j] = 0);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < w + 1; j++) {
      if (weight[i - 1] <= j) {
        dp[i][j] = Math.max(
          value[i - 1] + dp[i - 1][j - weight[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[i][j];
}

console.log(topDownKnapsack(weight, value, weight.length, w, dp));
