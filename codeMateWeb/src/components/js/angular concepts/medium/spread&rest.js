/*

- Rest Parameter

  function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }

  alert( sumAll(1) ); // 1
  alert( sumAll(1, 2) ); // 3
  alert( sumAll(1, 2, 3) ); // 6

The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
The ...rest must always be last.



  - Spread Parameter

  let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

let str = "Hello";

alert( [...str]


*/