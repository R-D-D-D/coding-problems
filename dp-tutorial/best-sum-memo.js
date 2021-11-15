const assert = require('assert');
var coinChange = function(coins, amount, memo) {
  // console.log(memo)
  if (amount in memo) {
    return memo[amount];
  };
  if (amount == 0) {
    return [];
  };
  if (amount < 0) {
    return null;
  };

  let minCoins = amount + 1;
  let tempArr = [];
  for (let i = 0; i < coins.length; i++) {
      let res = coinChange(coins, amount - coins[i], memo);
      if (res != null && res.length + 1 < minCoins) {
        minCoins = res.length + 1;
        tempArr = res.concat(coins[i]);
      }
  }
  if (minCoins == amount + 1) {
    return null;
  } else {
    memo[amount] = tempArr;
    return memo[amount];
  }
};

// console.log(coinChange([2], 3, {}));
// console.log(coinChange([1, 2, 5], 11, {}));
// console.log(coinChange([1], 0, {}));
console.log(coinChange([1, 2, 5, 25], 100, {}));
// assert(coinChange([1], 1) == 1);
// assert(coinChange([1], 2) == 2);
// console.log(coinChange([186,419,83,408], 6249));
