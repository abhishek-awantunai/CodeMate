const findHCFofNumbers = (num1, num2) => {
  let num = num1;
  while (num > 0) {
    if (num1 % num === 0 && num2 % num === 0) {
      return num;
    }
    num--;
  }
  return null;
};

console.log(findHCFofNumbers(15, 30));

// const hcf = (num1, num2) => {
//   let result = 1;
//   for (let i = 1; i < (num1 > num2 ? num2 : num1); i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       result = i;
//     }
//   }
//   return result;
// };

// console.log(hcf(60, 72));


