console.log([10, 20, 30, 40, 50].indexOf(30)); // 2
console.log([{ name: "pam" }, { name: "kent" }].indexOf({ name: "kent" })); // -1
console.log("hello world".indexOf("o")); // 4
console.log([[1], [2], [3], [4]].indexOf([2])); // -1


const arr = [1, 2, 3];

arr.length = 0;
console.log(arr[0]);    // undefined