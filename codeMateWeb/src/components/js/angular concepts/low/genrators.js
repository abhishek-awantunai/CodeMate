/**
  Generators are functions that can be paused and resumed as many times we like and at each pause it yields a value back.

  Arrays are iterable objects means we iterate through its values.

  let i = [1, 2, 3, 4, 5, 6, 7];

  let iterator = i[Symbol.iterator]();

  console.log(iterator.next().value);

  Due to this Symbol.iterator generator present in this Array we are able to apply for of loop in an array 

*/

function* g1() {
  console.log("hello1");
  yield "Yeild 1 ran";
  console.log("world1");
  yield "Yeild 2 ran";
  console.log("hello2");
  yield "Yeild 3 ran";
  console.log("world2");
  yield "Yeild 4 ran";
  return "final value";
}

let g = g1();

for (let val of g) {
  console.log(val);
}
