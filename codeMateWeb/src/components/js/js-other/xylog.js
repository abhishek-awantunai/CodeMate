/**
  variables inside IFFE do have a limited scope.
  So var x is available inside IFFE only as it is a local variable within this scope
  but y is declared without var so it will become a global variable hence it will also be
  available outside IFFE hence first line will console 200 while second will throw refrence error.   
*/

(function () {
  var x = 200;
  y = 200;
})();

console.log(y);
console.log(x);
