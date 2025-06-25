const arr = [1, 2, 3, 4, -2, 2, 4, 2, 2, 3, 5, 6, 3, 6, 3];

Array.prototype.removeDuplicates = function () {
  Array.prototype.sort.call(this, (a, b) => a - b);

  let prev = 0;
  for (let i = 1; i < this.length; i++) {
    if (this[prev] !== this[i]) {
      prev++;
      this[prev] = this[i];
    }
  }

  return this.slice(0, prev + 1);
};

console.log(arr.removeDuplicates());
