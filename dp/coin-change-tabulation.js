const assert = require('assert');
var coinChange = function(coins, amount) {
  let dpArr = new Array(amount + 1);
  dpArr.fill(-1);
  dpArr[0] = 0;
  for (let i = 0; i <= amount; i++) {
    if (dpArr[i] > -1) {
      for (let coin of coins) {
        if (dpArr[coin + i] > -1) {
          if (dpArr[i] + 1 < dpArr[coin + i]) {
            dpArr[coin + i] = dpArr[i] + 1;
          }
        } else {
          dpArr[coin + i] = dpArr[i] + 1;
        }
      }
    }
  }
  return dpArr[amount];
};

// console.log(coinChange([2], 3));
// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([1], 0));
// console.log(coinChange([1, 2, 5, 25], 100));
// assert(coinChange([1], 1) == 1);
// assert(coinChange([1], 2) == 2);
console.log(coinChange([186,419,83,408], 6249));
