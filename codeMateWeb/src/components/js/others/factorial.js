const getFactorial = (num) => {
  return num < 2 ? 1 : num * getFactorial(num - 1);
};

console.log(getFactorial(5));
