const list1 = [1, 2, 3, 4, 5];
// const list2 = [...list1];       // shallow copy
// const list2 = list1.slice();    // shallow copy
// const list2 = list1.concat([]); // shallow copy
const list2 = JSON.parse(JSON.stringify(list1)); // deep copy

list1.push(5, 6, 8);

console.log(list1); // [1,2,3,4,5]
console.log(list2); // [1,2,3,4,5,5,6,8]
