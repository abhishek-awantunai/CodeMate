/**
Creating Private variables 
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("Draw");
    };
  
    Object.defineProperty(this, "diameter", {
      get: function () {
        return this.radius * 2;
      },
      set: function (value) {
        this.radius = value;
      },
    });
  }
  
  const circle = new Circle(5);
  console.log(circle);
  circle.diameter = 20;
  console.log(circle.diameter);
  