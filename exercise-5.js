function memoize(fn) {
  let cache = {};
  return function addCache(num) {
    if (num in cache) {
      return `Fetching from cache for ${cache[num]}`;
    } else {
      cache[num] = fn(num);
      return cache[num];
    }
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
