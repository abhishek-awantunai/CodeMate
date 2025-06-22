const findSingleNumberFromDuplicateArray = (nums) => {
  let distincList = new Set(nums);
  for (let val of distincList) {
    const index = nums.indexOf(val);
    nums.splice(index, 1);
    const dupIndex = nums.indexOf(val);
    if (dupIndex < 0) {
      return val;
    }
  }
};

console.log(findSingleNumberFromDuplicateArray([3, 3, 4, 1, 2, 1, 2]));


// const findSingleNumberFromDuplicateArray = (nums) => {
//   let uniqueNum = 0;
//   nums.forEach((num) => {
//     uniqueNum ^= num;
//   });

//   return uniqueNum;
// };

// console.log(findSingleNumberFromDuplicateArray([3, 3, 4, 1, 2, 1, 2]));
