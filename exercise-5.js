function memoize(fn) {
  let cache = {};
  return function control(num) {
    let res = fn(num);
    for (const key in cache) {
      if (key === res) {
        return res;
      } else {
        cache.store = res;
      }
    }
    return res;
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log("Calculating result for " + factorial(10));
console.log("Fetching from cache for " + factorial(6));
console.log("Fetching from cache for " + factorial(5));
