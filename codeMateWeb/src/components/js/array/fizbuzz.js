const fizBuzz = (num) => {
  let char = "";
  if (num % 3 === 0) {
    char += "fizz";
  }
  if (num % 5 === 0) {
    char += "buzz";
  }
  return char;
};

console.log(fizBuzz(545));
