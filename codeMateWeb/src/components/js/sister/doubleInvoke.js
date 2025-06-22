function totalSum(num1, num2) {
  if (!num2) {
    return function (num2) {
      return num1 + num2;
    };
  }

  return num1 + num2;
}

console.log(totalSum(5)());
