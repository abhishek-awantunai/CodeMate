// new keyword and Object contructor

const obj1 = new Object(); // {}
obj1["lala"] = "lalaji";

// console.log(obj1);

// Object Literal Syntax
const obj2 = {
  name: "Abhishek Kumar",
  age: 21,
};

// using contructor function

function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;

  this.getCarbrand = () => {
    return this.brand;
  };
}

// console.dir(Car);

Car.prototype.getColor = function () {
  return this.color;
};

const bmw = new Car("red", "bmw", 2011);
// console.dir(bmw);

console.log(bmw.getCarbrand());

// console.log(bmw.getColor());
