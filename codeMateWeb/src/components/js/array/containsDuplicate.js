// const containsDuplicate = (nums) => {
//   const frequencyTracker = {};
//   for (let num of nums) {
//     frequencyTracker[num] = (frequencyTracker[num] || 0) + 1;
//     if (frequencyTracker[num] > 1) {
//       return true;
//     }
//   }
//   return false;
// };


const containsDuplicate = (nums) => {
  return (nums.length - new Set(nums).size) !== 0;
};

let nums = [1, 2, 3, 4, 5, 43, 6, 2, 4, 4];

console.log(containsDuplicate(nums));

