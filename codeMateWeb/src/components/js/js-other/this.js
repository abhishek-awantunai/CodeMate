function outer() {
  console.log(this);
  function inner() {
    console.log(this);
    function innerMost() {
      console.log(this);
    }
    innerMost.apply({ a: "sdss" });
  }

  inner.call("new scope");
}

const a = outer.bind("dsds");
a();



function functionDeclaration() {
  console.log(this); // undefined
}
functionDeclaration();

var functionExpression = function () {
  console.log(this); // undefined
};

functionExpression();

console.log(this); // undefined

(function () {
  console.log(this); // undefined
})();

const obj = {
  methodOne: function () {
    console.log(this); // undefined
  },
  methodTwo() {
    console.log(this); // undefined
  },
  methodThree: () => {
    console.log(this); // undefined
  },
  addSum(num) {
    return this.a + num;
  },
};

obj.methodOne();
obj.methodTwo();
obj.methodThree();

console.log(obj.addSum.call({ a: 10 }, 5));
console.log(obj.addSum.apply({ a: 10 }, [5]));

console.log(this);

function apple() {
  console.log(this);
}

apple();

let objM = {
  a: "ds",
  sample() {
    console.log(this);
  },
};

objM.sample();
