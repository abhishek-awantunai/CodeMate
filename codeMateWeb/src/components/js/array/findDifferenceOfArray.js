let findUnique = (arr1, arr2) => {
  let unique = [];

  let set1 = Array.from(new Set(arr1));
  let set2 = Array.from(new Set(arr2));

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    if (index < 0) {
      unique.push(arr1[i]);
    } else {
      arr2.splice(index, 1);
    }
  }

  return Array.from(new Set([...unique, ...arr2]));
};

let arr1 = [1, 2, 576, 345, 65, 343, 4, 34, 4, 3, 6, 43, 4, 45, 3, 432, 432];
let arr2 = [2, 3, 232, 435, 454, 5, 576, 65, 3, 432, 432];

console.log(findUnique(arr1, arr2));
