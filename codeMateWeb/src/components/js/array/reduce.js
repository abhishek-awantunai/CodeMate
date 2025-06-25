let arr = [1, 2, 3, 4, 5, 5, 4, 3, 3];

// let sum = arr.reduce((total, val) => total + val, 0);

// console.log(arr);
// console.log(sum);

Array.prototype.customReduce = function (initialValue, reducerFunction) {
  console.log(initialValue);
  console.log(reducerFunction);
  if (this.length === 0) {
    return initialValue;
  } else {
    const [first, ...rest] = this;
    const updatedAcc = reducerFunction(initialValue, first);
    return this.customReduce(rest, updatedAcc, reducerFunction);
  }
};

arr.customReduce(0, (total, val) => total + val);
