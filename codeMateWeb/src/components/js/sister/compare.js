console.log(7 === "7"); // false
console.log(1 == true); // true
console.log(" 1 " == true); // true
console.log("1" == true); // true
console.log("2" == true); // false
console.log(7 == true); // false
console.log(7 === true); // false
console.log(true == 7); // false
console.log(true === 7); // false
console.log(true == "7"); // false
console.log(true === "7"); // false

console.log("==================================");

console.log(7 == "7"); // true - value check
console.log(7.0 == 7); // true - value check
console.log(7.0 === 7); // true - only absolute value checked i.e 7 and both is of number type
console.log(7 == 8 - 1); // true
console.log(7 === 8 - 1); // true
console.log(7 == 8.1 - 1.1); // true
console.log(7 === 8.1 - 1.1); // true
console.log((5 / 3).toPrecision(2) == 1.7); // true
console.log(Number((5 / 3).toPrecision(2)) === 1.7); // true
