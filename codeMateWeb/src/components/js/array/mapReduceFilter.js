const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.customReduce = function (cb) {
  let val = 0;
  for (let i = 0; i < this.length; i++) {
    val = cb(val, this[i]);
  }
  return val;
};

const reducedArr = arr.reduce((sum, val) => sum + val);
const customReducedArr = arr.customReduce((sum, val) => sum + val);
// console.log(reducedArr);
// console.log(customReducedArr);

Array.prototype.customMap = function (cb) {
  const outputArray = [];
  for (let i = 0; i < this.length; i++) {
    outputArray.push(cb(this[i]));
  }
  return outputArray;
};

const mappedArray = arr.map((el) => el + 1);
const customMappedArray = arr.customMap((el) => el + 1);

// console.log(mappedArray);
// console.log(customMappedArray);

Array.prototype.myCustomFilter = function (cb) {
  const outputArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      outputArray.push(this[i]);
    }
  }
  return outputArray;
};

const filteredArr = arr.filter((e) => e % 2 === 0);
const customFilteredArr = arr.myCustomFilter((e) => e % 2 === 0);

// console.log(arr);
// console.log(filteredArr);
// console.log(customFilteredArr);
