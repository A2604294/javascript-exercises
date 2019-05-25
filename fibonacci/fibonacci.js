const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

//solution with recursion
const recursiveFibonacci = function(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else if (n < 0) {
        return "OOPS"
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);

}

module.exports = fibonacci;
