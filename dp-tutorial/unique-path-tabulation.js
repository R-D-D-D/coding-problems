const assert = require('assert');

// memo
var uniquePaths = function(m, n) {
    let dpMat = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))
    dpMat[1][1] = 1;
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i+1 <= m) dpMat[i+1][j] += dpMat[i][j];
        if (j+1 <= n) dpMat[i][j+1] += dpMat[i][j];
        // console.log(dpMat)
      }
    }
    return dpMat[m][n];
};

assert(uniquePaths(3, 3) == 6);
assert(uniquePaths(7, 3) == 28);
