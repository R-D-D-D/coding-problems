const assert = require('assert');

const canSum = (amount, coins, memo={}) => {
  let dpArr = new Array(amount + 1);
  dpArr.fill(false);
  dpArr[0] = true;
  for (let i = 0; i <= amount; i++) {
    if (dpArr[i]) {
      for (let coin of coins) {
        dpArr[i + coin] = true;
      }
    }
  }
  return dpArr[amount];
}

console.log(canSum(6249, [186,419,83,408]));
console.log(canSum(100, [24,9,6,408]));