var reverse = function (x) {
  let s = ("" + x).split("");
  let j = 0;
  for (let i = s.length - 1; i > Math.floor(s.length / 2) - 1; i--) {
    let temp1 = s[i];
    let temp2 = s[j];
    s[i] = temp2;
    s[j] = temp1;
    j++;
  }

  let val = x > 0 ? parseInt(s.join("")) : -1 * parseInt(s.join(""));

  return val > Math.pow(2, 31) || val < -Math.pow(2, 31) ? 0 : val;
};

console.log(reverse(321));




// var reverse = function (x) {

//   const isNegative = x < 0;
//   var n = 0, rv = 0;
//   x = Math.abs(x);
//   while (x) {
//     n = x % 10;
//     x = Math.floor(x / 10);
//     rv = rv * 10 + n;
//   }

//   if (rv >= 2147483648) {
//     return 0;
//   }

//   return isNegative ? -rv : rv;
// };