// O(Log(n))

const binarySearch = (arr, num) => {
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = sorted.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (sorted[middle] !== num && start <= end) {
    if (num < sorted[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return sorted[middle] === num ? middle : -1;
};

const arr = [12, 3, 4, 5, 55, 53, 233, 43, 433, 34, 23];
const num = 23;
console.log(binarySearch(arr, num));
