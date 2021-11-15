const assert = require('assert');
var coinChange = function(coins, amount) {
  let dpArr = new Array(amount + 1);
  dpArr.fill(null);
  dpArr[0] = [];
  for (let i = 0; i <= amount; i++) {
    if (dpArr[i] != null) {
      for (let coin of coins) {
        if (dpArr[coin + i] != null) {
          if (dpArr[i].length + 1 < dpArr[coin + i].length) {
            dpArr[coin + i] = dpArr[i].concat(coin);
          }
        } else {
          dpArr[coin + i] = [...dpArr[i], coin];
        }
      }
    }
  }
  return dpArr[amount];
};

// console.log(coinChange([2], 3));
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([1], 0));
console.log(coinChange([1, 2, 5, 25], 100));
// assert(coinChange([1], 1) == 1);
// assert(coinChange([1], 2) == 2);
// console.log(coinChange([186,419,83,408], 6249));
