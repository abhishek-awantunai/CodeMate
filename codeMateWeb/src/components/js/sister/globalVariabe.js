/**

This will not perform as shown in strict mod

*/

(function () {
  var x = y = 200;

  console.log(x); // 200
  console.log(y); //200
})();

console.log(y); // 200
console.log(x); // error