const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

console.log(arr);
console.log(filteredArr);
console.log(customFilteredArr);


// Array.prototype.mfilter = function (fun) {
//   let filtered = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fun(this[i], i, this)) filtered.push(this[i]);
//   }
//   return filtered;
// };

// let returnedArr = [1, 2, 3, 4, 5, 6].mfilter(function (element, index, arr) {
//   return element % 2 === 0;
// });

// console.log(returnedArr);
