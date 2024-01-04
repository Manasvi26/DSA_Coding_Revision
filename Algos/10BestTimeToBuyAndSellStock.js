// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// let prices = [7, 1, 5, 3, 6, 4];
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

let prices = [7, 6, 4, 3, 1];
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

//Solution 1.
//Brute force
//Difference between each elements with two loops
//T.C: O(N) and S.P: O(1);

//Solution 2.

//Running a pointer and comparing the differnce between minimum and current value.
//If find minimum moving forward we will update it and check the differences by comparing
//it further.
//**Imp: Here we are storing the previos values as well, so
//no chance of misleading calculations**.

function highestProfit(prices) {
  let minPrice = prices[0];
  let maxDiff = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxDiff = Math.max(maxDiff, prices[i] - minPrice);
  }

  return maxDiff;
}

console.log(highestProfit(prices));
