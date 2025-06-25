/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let sorted = JSON.parse(JSON.stringify(nums));
  sorted = sorted.sort((a, b) => a - b);
  let numList = [];

  while (left < right) {
    if (sorted[left] + sorted[right] > target) {
      right--;
    } else if (sorted[left] + sorted[right] < target) {
      left++;
    } else {
      numList = [sorted[left], sorted[right]];
      break;
    }
  }

  if (numList[0] === numList[1]) {
    let indexes = [],
      i = -1;
    while ((i = nums.indexOf(numList[1], i + 1)) != -1) {
      indexes.push(i);
    }
    return [indexes[0], indexes[1]];
  } else {
    return [nums.indexOf(numList[0]), nums.indexOf(numList[1])];
  }
};

let nums = [3, 3],
  target = 6;

console.log(twoSum(nums, target));
