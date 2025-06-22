const sumZero = (arr, num) => {
  arr = arr.sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  let sum = arr[start] + arr[end];
  let list = [];

  while (start < end) {
    sum = arr[start] + arr[end];
    if (sum > 0) {
      end--;
    } else if (sum < 0) {
      start++;
    } else {
      list.push([arr[start], arr[end]]);
      start++;
      end--;
    }
  }
  return list;
};

const arr = [
  -1,
  -23,
  -4,
  -5,
  -34,
  -5,
  -24,
  -23,
  -13,
  -4,
  23,
  23,
  4,
  3,
  4,
  30,
  32,
  2,
  13,
  98,
  23,
  52,
  12,
  53,
];

console.log(sumZero(arr, 3));
