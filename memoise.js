function memoise(fn) {
  let cache = {};
  return function(...args) {
    const arguments = JSON.stringify(args);
    if (cache[arguments]) {
      console.log("Giving from cache")
      return cache[arguments];
    }
    console.log("Calculating..")
    const result = fn.apply(this, args);
    cache[arguments] = result;
    return result;
  }
}

const add = (a, b) => a + b;
const memoisedAdd = memoise(add);
memoisedAdd(1,2);
memoisedAdd(1,2);
memoisedAdd(1,2);
memoisedAdd(1,2);
