const assert = require('assert');

// memo
var uniquePaths = function(m, n, memo={}) {
    let key = `${m},${n}`;
    if (memo[key] != undefined) {
        return memo[key];
    };
    if (m == 1 && n == 1) {
        return 1;
    } 
    if (m == 0 || n == 0) {
        return 0;
    }
    
    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[key];
};

assert(uniquePaths(7, 3) == 28);
assert(uniquePaths(3, 3) == 6);
