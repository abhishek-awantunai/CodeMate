console.log(color); // undefined

var color = "blue";

console.log(color); // blue

/**
  
  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)

  A function created with Function declaration is also available before its declaration.
  i.e we can call getSum(2,3) over here but getExpSum(2,3) will throw error over here because
  getExpSum is undefined over here and  undefined is not a function.
  And getExpSum becomes undefined due to hoisted of variable
*/

// Function Declaration
console.log(getSum(2, 3));
function getSum(a, b) {
  return a + b;
}

// Function Expression
var getExpSum = function (a, b) {
  return a + b;
};

console.log(getExpSum(2, 3));

// Function Declaration
function getTotal() {
  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

console.log(getTotal());
