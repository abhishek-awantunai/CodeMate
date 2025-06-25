/* 

Closures are basically, the inner function having access to the variables in the outer function scope, even after the outer function has returned.

Closures are functions with preserve data

A function bundled together with its lexical scope forms closure

*/

const globalVariable = "Kattapa";

function outerFunction(param1) {
  const variable1 = "var one";

  function innerFunction(param2) {
    const variable2 = "var two";
    console.log("global variable ", globalVariable);
    console.log("variable1 ", variable1);
    console.log("variable2 ", variable2);
    console.log("param1 ", param1);
    console.log("param2 ", param2);
  }

  innerFunction("param one");

  console.dir(innerFunction);
}

var add = (function () {
  var counter = 0;
  return function () { counter++; return counter; }
})();


add();
add();
console.dir(add);

outerFunction("param two");
