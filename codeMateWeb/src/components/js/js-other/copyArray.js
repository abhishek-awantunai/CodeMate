const list1 = [1, 2, 3, 4, 5];

const list2 = list1; // refrence copied
const list3 = list1.slice(); // shallow copy
const list4 = list1.concat([]); // shallow copy
const list5 = [...list1]; // shallow copy
const list6 = JSON.parse(JSON.stringify(list1)); // deep copy

list1.push(6, 7, 8, 9);

console.log(list1);
console.log(list2);
console.log(list3);
console.log(list4);
console.log(list5);
console.log(list6);
