// const intersect = function (nums1, nums2) {
//   let left = [];
//   let right = [];

//   if (nums1.length > nums2.length) {
//     left = nums1;
//     right = nums2;
//   } else {
//     left = nums2;
//     right = nums1;
//   }

//   const leftFrequency = {};

//   for (let index of left) {
//     leftFrequency[index] = (leftFrequency[index] || 0) + 1;
//   }

//   const rightFrequency = {};

//   for (let index of right) {
//     rightFrequency[index] = (rightFrequency[index] || 0) + 1;
//   }

//   let arr = [];
//   right.forEach((num) => {
//     if (leftFrequency.hasOwnProperty(num)) {
//       let count = 0;
//       if (rightFrequency[num] > leftFrequency[num]) {
//         count = leftFrequency[num];
//       } else if (rightFrequency[num] < leftFrequency[num]) {
//         count = rightFrequency[num];
//       } else {
//         count = leftFrequency[num];
//       }

//       if (arr.indexOf(num) < 0) {
//         arr = [...arr, ...new Array(count).fill(num)];
//       }
//     }
//   });

//   return arr;
// };

// const nums1 = [3, 1, 2];
// const nums2 = [1, 1];

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));

const intersect = function (nums1, nums2) {
  const intersection = [];
  nums1.forEach(n => {
    if (nums2.indexOf(n) > -1) {
      intersection.push(nums2.splice(nums2.indexOf(n), 1));
    }
  });
  return intersection;
}





// var intersect = function (nums1, nums2) {
//   let left = [];
//   let right = [];

//   if (nums1.length > nums2.length) {
//     left = nums1;
//     right = nums2;
//   } else {
//     left = nums2;
//     right = nums1;
//   }

//   const leftFrequency = {};

//   for (let index of left) {
//     leftFrequency[index] = (leftFrequency[index] || 0) + 1;
//   }

//   const rightFrequency = {};

//   for (let index of right) {
//     rightFrequency[index] = (rightFrequency[index] || 0) + 1;
//   }

//   let arr = [];
//   right.forEach((num) => {
//     if (leftFrequency.hasOwnProperty(num)) {
//       let count = 0;
//       if (rightFrequency[num] > leftFrequency[num]) {
//         count = leftFrequency[num];
//       } else if (rightFrequency[num] < leftFrequency[num]) {
//         count = rightFrequency[num];
//       } else {
//         count = leftFrequency[num];
//       }

//       if (arr.indexOf(num) < 0) {
//         arr = [...arr, ...new Array(count).fill(num)];
//       }
//     }
//   });

//   return arr;
// };

// const num1 = [1, 1, 5, 4, 8, 3, 2, 2];
// const num2 = [1, 5, 4, 6, 7, 8, 2, 2, 1];
// console.log(intersect(num1, num2));
