/**
  Object creation methods

  i) Object Literal
  ii) Factory Pattern
  iii) Constructor Pattern

  Every object has a constructor property and that reference to the function which is used to create that object.

  Object Literal - { [native  code] }
  Factory Pattern - Factory function
  Constructor Pattern - f Object() { [native  code] }

 */

// i) Object Literal

const obj1 = {
  property1: "apple",
  property2: "banana",
  property3: "guava",
  method1: function () {
    console.log(this.property1);
    return this.property2;
  },
};

console.log(obj1.method1());

// Factory pattern

function car(color, model) {
  return {
    color,
    model,
  };
}

const bmw = car("red", "BMW");
console.log(bmw);

// Constructor Pattern
function Circle(radius) {
  this.radius = radius;
}

const cir = new Circle(5);

console.log(cir);


