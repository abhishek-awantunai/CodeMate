// Solution 1 96 ms O(N)

// let removeDuplicates = (nums) => {
// if (!nums.length) return 0;
//   let count = 0;
//   let frequencyTracker = {};
//   for (let num of nums) {
//     frequencyTracker[num] = (frequencyTracker[num] || 0) + 1;
//     if (frequencyTracker[num] === 1) {
//       nums[count] = num;
//       count++;
//     }
//   }
//   return count;
// };

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// console.log(removeDuplicates(nums));

// Solution 2 96 ms O(N)
// let removeDuplicates = (nums) => {
// if (!nums.length) return 0;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   return count;
// };

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// console.log(removeDuplicates(nums));
// console.log(nums);

// Online solution - 86ms O(N)
let removeDuplicates = (nums) => {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
console.log(nums);
