function matches(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  matches({ hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // false
