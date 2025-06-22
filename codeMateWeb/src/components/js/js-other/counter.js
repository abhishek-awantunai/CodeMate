function conterFunction() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

console.log(conterFunction());

const instanceOne = conterFunction();
const instanceTwo = conterFunction();

console.log("instanceOne : ", instanceOne());
console.log("instanceOne : ", instanceOne());
console.log("instanceTwo : ", instanceTwo());
console.log("instanceOne : ", instanceOne());
console.log("instanceOne : ", instanceOne());
console.log("instanceOne : ", instanceOne());
console.log("instanceTwo : ", instanceTwo());