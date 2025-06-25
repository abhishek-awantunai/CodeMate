// Closure use case


function myFunction() {
  let count = 0;

  return function () {
    if (count === 3) {
      console.log('abe kitni baar call karega');
    }

    count++;
    return count;
  }
}

const firstInstance = myFunction();
const secondInstance = myFunction();


console.log('firstInstance ', firstInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('firstInstance ', firstInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');
console.log('secondInstance ', secondInstance() + ' times called');