/**
    A function that takes a function as an argument or returns a new function is called Higher Function.
*/

function x(){
    console.log('Namaste Javascript');
}

function y(){
    x();    // x is a callback function
}

y();        // y is a higher order function


// Some Higher order function examples
const radius = [1, 2, 3, 4, 5];

const calculateAreaOfCircle = (radius) => Math.round(Math.PI*radius*radius);

const calculateCircumference = (radius) => Math.round(2*Math.PI*radius);

const calculateDiameter = (radius) => 2*radius;

// const calculationWrapper = (radius, fn) => {
//     const arr = [];
//     for (let i = 0; i < radius.length; i++) {
//         arr.push(fn(radius[i]));
//     }
//     return arr;
// };


// console.log(calculationWrapper(radius, calculateAreaOfCircle));
// console.log(calculationWrapper(radius, calculateCircumference));
// console.log(calculationWrapper(radius, calculateDiameter));

// radius.map(calculateAreaOfCircle);

Array.prototype.calculationWrapper = (fn) => {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(fn(this[i]));
    }
    return arr;
};

console.log(radius.calculationWrapper(radius, calculateAreaOfCircle));
console.log(radius.calculationWrapper(radius, calculateCircumference));
console.log(radius.calculationWrapper(radius, calculateDiameter));