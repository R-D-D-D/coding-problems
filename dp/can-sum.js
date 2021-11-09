const assert = require('assert');

const canSum = (amount, coins, memo={}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (let coin of coins) {
    const remain = amount - coin;
    if (canSum(remain, coins) === true) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}

console.log(canSum(6249, [186,419,83,408]));