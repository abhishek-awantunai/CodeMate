// Create an Object with Constructor Pattern

const Circle = function (radius) {
  (this.radius = radius),
    (this.draw = () => {
      console.log("Draw a circle with radius " + this.radius);
    });
};

const radius1 = new Circle(1);
const radius2 = Circle.call({}, 1); // since this was not returned from this Circle [ constructor function ].

console.log(radius1.constructor);
console.log(radius2);

// Create an Object with Factory Pattern
const createCircle = function (radius) {
  return {
    radius,
    draw() {
      console.log(this.draw);
    },
  };
};

const radius3 = createCircle(3);
console.log(radius3);

console.log(radius3.constructor);
// ƒ Object() { [native code] } -
// Matlab Genric Object constructor function use kiya gya hai is object to banane me kyoki agar dhyan se dekhe to factory function me bhi hum Object hi return kr rhe hai jo Object literal method se banaya gya hai.

/*
  Other Constructor functions are :-
  
  new String() = ''
  new Boolean(true) = true
  new Number(1) = 1
  
  */
