/**
  Due to this Symbol.iterator generator present in this Array we are able to apply for of loop in an array
 */

let i = [1, 2, 3, 4, 5, 6, 7];

let iterator1 = i[Symbol.iterator]();
let iterator2 = i[Symbol.iterator]();

for (let val of iterator1) {
  console.log(val);
}

console.log(iterator2.next().value);

let a = [1, 2, 3, 4, 5];

let o = {
  a: "a",
  b: "b",
};

// valid
for (let key in a) {
  console.log(key);
}

// valid
for (let key in o) {
  console.log(key);
}

// valid
for (let val of a) {
  console.log(val);
}

// invalid
for (let val of o) {
  console.log(val);
}
