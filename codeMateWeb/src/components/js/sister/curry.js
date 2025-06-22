/**
  console.log(apple) will print function
  every function returns a value or undefined
*/

function apple(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

// const outer = apple(5);
// const inner = outer(4);
// const val = inner(3);

const val = apple(5)(4)(3);

console.log(val);

console.log(apple()()); // returns function with param c

console.log(apple()()()); //  undefined * undefined * undefined = NaN
