const primefactorOfANumber = (num) => {
  console.time("Time this");
  const primefactor = isPrime(num) ? [1, num] : [1];
  let i = num - 1;

  while (i > 1) {
    if (num % i === 0) {
      primefactor.push(i);
    }
    i--;
  }

  console.timeEnd("Time this");
  return primefactor;
};

const isPrime = (num) => {
  let i = num - 1;
  while (i > 1) {
    if (num % i === 0) {
      return false;
    }
    i--;
  }
  return true;
};

console.log(primefactorOfANumber(999));
