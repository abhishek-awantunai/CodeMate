const isAPrimeNumber = (num) => {
  let i = num - 1;
  while (i > 1) {
    if (num % i === 0) {
      return false;
    }
    i--;
  }
  return true;
};

console.log(isAPrimeNumber(187));
