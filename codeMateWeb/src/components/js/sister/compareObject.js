/*
  
  Two objects are never equal to each other in JAVASCRIPT because we always store references of that objects in the variable i.e in user1 and user2

*/

const user1 = {
  name: "Jordan",
  age: 21,
};

const user2 = {
  name: "Jordan",
  age: 21,
};

const user3 = user1;
user3.name = "sdfsdfsd";

console.log(user1 == user3); // true
console.log(user1 === user3); // true

console.log(user1 === user2); // false
console.log(user1 == user2); // false

console.log(JSON.stringify(user1) === JSON.stringify(user2));
console.log(JSON.stringify(user1) === JSON.stringify(user3));
