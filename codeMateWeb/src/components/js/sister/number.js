console.log(900.9 === 3 * 300.3); // false
console.log(900.9 == 3 * 300.3); // false

console.log((3 * 300.3).toFixed(3)); // 900.900
console.log(900.9 == (3 * 300.3).toFixed(3)); // true
console.log(900.9 === (3 * 300.3).toFixed(3)); // false
console.log(900.9 === Number((3 * 300.3).toFixed(3))); // true
console.log(900.9 === Number((3 * 300.3).toPrecision(5))); // true
console.log((3 * 300.3).toPrecision(5)); // 900.90
console.log(900.9 === (3 * (300.3 * 10)) / 10); // true
