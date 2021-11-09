const assert = require('assert');

function largestSubarray (arr) {
  let prefixSum = [];
  let accum = 0;
  arr.map(ele => {
    prefixSum.push(accum + ele);
    accum += ele;
  });
  let sumIndexMap = {};
  let largestSoFar = 0;
  prefixSum.map((ele, idx) => {
    if (sumIndexMap[`${ele}`] != undefined) {
      largestSoFar = Math.max(idx - sumIndexMap[`${ele}`], largestSoFar);
    } else {
      sumIndexMap[`${ele}`] = idx;
      // console.log(sumIndexMap);
      if (ele == 0) largestSoFar = Math.max(1, largestSoFar);
    }
  })
  return largestSoFar;
}

let arr1 = [15, -2, 2, -8, 1, 7, 10, 23];
let arr2 = [1, 2, 3];
let arr3 = [1, 0, 3];

assert(largestSubarray(arr1) == 5);
assert(largestSubarray(arr2) == 0);
assert(largestSubarray(arr3) == 1);
