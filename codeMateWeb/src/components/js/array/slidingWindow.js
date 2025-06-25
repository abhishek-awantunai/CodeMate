function maxSumArray(arr, n) {
  if (n > arr.length) {
    return 0;
  }
  let i = 0;
  let start = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max += arr[i];
  }
  while (i < arr.length - n + 1) {
    const temp = max - arr[i] + arr[i + n - 1];
    const t = i;
    if (temp > max) {
      max = temp;
      start = t;
    }
    i++;
  }
  const obj = {
    index: [start, start + n - 1],
    max: max,
  };
  return obj;
}
// const arr = [1, 2, 3, 4, 5];

const arr = [1, 2, 3, 4, 5, 6, 7, 7, , 8, 8, 8, 5, 4, 5, 6, 9, 4, 5, 5, 7];
console.log(maxSumArray(arr, 4));
