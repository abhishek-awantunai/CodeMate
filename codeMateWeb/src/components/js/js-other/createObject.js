// new keyword and Object contructor

const obj1 = new Object();
obj1["lala"] = "lalaji";

console.log(obj1);

// Object Literal Syntax
const obj2 = {
  name: "Abhishek Kumar",
};

console.log(obj2);

// using contructor function

function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;

  this.printThis = function () {
    console.log(this);
  }
}

Car.prototype.getColor = function () {
  return this.color;
};

Car.prototype.printThis = function () {
  console.log(this);
};

const bmw = new Car("red", "bmw", 2011);

console.log(bmw.getColor());

bmw.printThis();
