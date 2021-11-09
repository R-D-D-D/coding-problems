const assert = require('assert');
var coinChange = function(target, numbers, memo) {
  // console.log(memo)
  if (target in memo) {
      return memo[amount];
  };
  if (amount == 0) {
      return 0
  };
  if (amount < 0) {
      return -1
  };

  let minCoins = amount + 1;
  for (let i = 0; i < coins.length; i++) {
      let res = helper(coins, amount - coins[i], memo);
      if (res >= 0 && res < minCoins) minCoins = res + 1;
  }
  if (minCoins == amount + 1) return -1;
  memo[amount] = minCoins == amount + 1 ? -1 : minCoins;
  return minCoins;
};

// assert(coinChange([2], 3) == -1);
// assert(coinChange([1, 2, 5], 11) == 3);
// assert(coinChange([1], 0) == 0);
// assert(coinChange([1], 1) == 1);
// assert(coinChange([1], 2) == 2);
console.log(coinChange([186,419,83,408], 6249));
// console.log(coinChange([1, 2, 5, 25], 100));