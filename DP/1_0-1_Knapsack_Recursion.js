var weight = [10, 20, 30];

var value = [60, 100, 120];

var w = 50;

function knapsack(weight, value, w, n) {
  if (n === 0 || w === 0) {
    //remember this mistake, we need to put "n" not "weight.length"
    return 0;
  }

  if (weight[n - 1] <= w) {
    // console.log("hello");
    return Math.max(
      value[n - 1] + knapsack(weight, value, w - weight[n - 1], n - 1),
      knapsack(weight, value, w, n - 1)
    );
  } else {
    return knapsack(weight, value, w, n - 1);
  }
}

console.log(knapsack(weight, value, w, weight.length));
