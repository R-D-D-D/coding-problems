function fib(n) {
  if (n == 0) {
    return 0;
  } 
  if (n == 1) {
    return 1;
  }
  let arr = Array(n + 1);
  arr = arr.fill(0);

  arr[1] = 1;
  for (let i = 0; i <= n; i++) {
    arr[i + 1] += arr[i];
    arr[i + 2] += arr[i];
  }
  return arr[n];
}

console.log(fib(50));