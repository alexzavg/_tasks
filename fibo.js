// function which returns the nth Fibonacci number
function fibo(n) {
  if (n === 0) {
      return 0;
  }
  else if (n === 1) {
      return 1;
  }
  else {
    // recursive call to fibo
      return fibo(n-1) + fibo(n-2);
  }
}

console.log(fibo(3));