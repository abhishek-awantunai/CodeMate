// Create an Object with Constructor Pattern

function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("Draw a circle with radius " + this.radius);
  };
}

const radius1 = new Circle(1);
console.log(radius1.constructor);
console.log(Circle.constructor);
/**
 * Circle function was used to create this radius Object
 * ƒ Function() { [native code] } was used to create this Circle function  this Function is a also a constructor function.
 *
 */

const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = () => {
    console.log("Draw a circle with radius " + this.radius);
  };`
);

const radi = new Circle1(1);
console.log(radi);
console.log(radi.constructor);
console.log(Circle1.constructor);
