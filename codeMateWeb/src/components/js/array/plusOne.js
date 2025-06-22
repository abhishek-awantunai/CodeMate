const plusOne = function (digits) {
  let carryForward = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    } else {
      digits[i] += carryForward;
    }
    carryForward = Math.floor(digits[i] / 10);
    digits[i] = digits[i] % 10;
  }

  if (carryForward > 0) {
    digits.unshift(carryForward);
  }

  return digits;
};

// let digits = [1, 2, 3];
// let digits = [4, 3, 2, 1];
let digits = [9, 9, 9, 9];
// let digits = [0];

console.log(plusOne(digits));


// var plusOne = function(digits) {
//   lastIdx = digits.length - 1
//   // if (digits[lastIdx] + 1 < 10) {
//   //   digits[lastIdx] += 1;
//   //   return digits;
//   // } 

//   const recurseCarry = (idx) => {
//     if (idx < 0) return digits.unshift(1);
//     if (digits[idx] + 1 < 10) {
//       digits[idx] += 1;
//       return;
//     }
//     digits[idx] = 0;
//     recurseCarry(idx-1)
//   }

//   recurseCarry(lastIdx)

//   return digits;
// };