console.log(900.9 === 3 * 300.3); // false
console.log(900.9 == 3 * 300.3); // false

console.log((3 * 300.3).toFixed(3));
console.log(900.9 == (3 * 300.3).toFixed(3)); // rounds to 900.900 hence value same
console.log(900.9 === (3 * 300.3).toFixed(3)); // returns number as a string so false
console.log(900.9 === Number((3 * 300.3).toFixed(3))); // convert back to number
console.log(900.9 === Number((3 * 300.3).toPrecision(5)));
console.log((3 * 300.3).toPrecision(5));
console.log(900.9 === (3 * (300.3 * 10)) / 10);
