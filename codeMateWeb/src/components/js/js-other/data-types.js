const num = 1323764872646283642634682347324932432;
console.log(typeof num);    // number
const string = '1323764872646283642634682347324932432';
console.log(typeof string); // string
let undef;
console.log(typeof undef);  // undefined
let isNull = null;
console.log(typeof isNull); //object
// console.log(isNull.__proto__);    throws error because ki chalo maan liya ki isNull ka data type to object hai but ye khud to null mtlab iski value null hai so ispe prototype kaise hi attach hoga isiliye ye error throw karega
let obj = {};
console.log(typeof obj);    // object
console.log(obj.__proto__); // obj.prototype
let arr = [];
console.log(typeof arr);    // object
console.log(arr.__proto__); // obj.prototype