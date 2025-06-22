const moveZeroes = (nums) => {
  let indedxTracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      indedxTracker[i] = 0;
    }
  }

  let t = 0;
  for (let pos in indedxTracker) {
    nums.splice(parseInt(pos) - t, 1);
    t++;
  }
  while (t > 0) {
    nums.push(0);
    t--;
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];
// let nums = [0, 0, 1];

console.log(moveZeroes(nums));
