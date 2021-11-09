const assert = require('assert');

function subarraySum(nums, k) {
  let sumIndexMap = {};
  let result = 0;
  let accum = 0;
  
  nums.map((item, idx) => {
      accum = accum + item;
      let diff = accum - k;
      if (sumIndexMap[`${diff}`] != undefined) {
        result += sumIndexMap[`${diff}`];
      } 
      if (diff == 0) {
        result += 1;
      }
      if (sumIndexMap[`${accum}`] != undefined) {
          sumIndexMap[`${accum}`] += 1;
      } else {
          sumIndexMap[`${accum}`] = 1;
      }
  })
  return result;
};

let arr1 = [1, 1, 1];
let arr2 = [1, 2, 3];
let arr3 = [-1, 1, 0];

assert(subarraySum(arr1, 2) == 2);
assert(subarraySum(arr2, 3) == 2);
assert(subarraySum(arr3, 0) == 3);