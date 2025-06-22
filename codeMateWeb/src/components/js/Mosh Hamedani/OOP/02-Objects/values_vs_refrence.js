let number = 10;

function increase(num) {
  num.id++;
}

increase(number);
console.log(number);
/**
{id: 11}
Refrence Example

*/

let number1 = {
  id: 10,
};

function increaseObject(num) {
  num.id++;
}

increaseObject(number1);
console.log(number1);
/**
  10
  Primitive Example
  
  */
