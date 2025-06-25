/**

    A closure is a function bundled together with its lexical environment / scope.
    When functions do return from a function then they still do remember their lexical scope.
    So when we return a function then not only the function is returned but also its lexical scope is returned.
    
    A function along with its lexical environment bundled together forms a closure.

*/

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}
x();


const trackMyCall = (function () {
  var counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

console.log(trackMyCall());
console.log(trackMyCall());
console.log(trackMyCall());
console.log(trackMyCall());
console.dir(trackMyCall);

const globalVariable = "sdfsdfd";

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

outerFunction("param two");
