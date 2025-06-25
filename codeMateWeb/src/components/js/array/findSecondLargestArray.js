let arr = [1121, 2, 47, 144, 3, 684];

const findSecondLargest = (arr) => {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return largest;
};

console.log(findSecondLargest(arr));
