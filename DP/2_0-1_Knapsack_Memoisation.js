var weight = [10, 20, 30];

var value = [60, 100, 120];

var w = 50;

let dp = Array(2001).fill(-1);
for (let i = 0; i < dp.length; i++) {
  dp[i] = Array(2001).fill(-1);
}
// console.log(dp);

function knapsack(weight, value, w, n, dp) {
  if (w === 0 || n === 0) {
    return (dp[w][n] = 0);
  }

  if (dp[w][n] != -1) {
    return dp[w][n];
  }

  //   console.log("hello");
  //   console.log(dp);

  if (weight[n - 1] <= w) {
    dp[w][n] = Math.max(
      value[n - 1] + knapsack(weight, value, w - weight[n - 1], n - 1, dp),
      knapsack(weight, value, w, n - 1, dp)
    );
    return dp[w][n];
  } else {
    dp[n][w] = knapsack(weight, value, w, n - 1, dp);
    return dp[w][n];
  }
}

console.log(knapsack(weight, value, w, weight.length, dp));
