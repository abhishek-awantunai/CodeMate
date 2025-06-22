Array.prototype.myCustomMap = function (cb) {
  let outputArray = [];
  for (let i = 0; i < this.length; i++) {
    outputArray.push(cb(this[i], i, this));
  }
  return outputArray;
};

let arr = [1, 2, 3, 4, 5];

console.log(arr.myCustomMap((el) => el + 1));
console.log(arr);
