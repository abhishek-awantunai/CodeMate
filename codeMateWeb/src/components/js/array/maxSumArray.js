const maxSumArray = (arr, num) => {
  let max,
    sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  max = sum;

  for (let i = 1; i < arr.length - (num - 1); i++) {
    sum = sum - arr[i - 1] + arr[i + (num - 1)];

    if (sum > max) {
      max = sum;
    }
  }

  return max;
};

console.log(maxSumArray([1, 2, 3, 4, 5, 6, 6, 4, 3, 3, 5, 3, 3, 3, 3], 3));
