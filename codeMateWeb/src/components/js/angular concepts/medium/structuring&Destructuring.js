/*

Destructuring
ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables:

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

// old syntax
let firstName = person.firstName;
let lastName = person.lastName;

// new syntax i.e destructuring
let {
  firstName: fname,
  lastName: lname
} = person;

The identifier before the colon (:) is the property of the object and the identifier after the colon is the variable.

let {
  firstName,
  lastName
} = person;

*/


/*

Structuring

let a = "a", b = "b";             // The variables
let obj = {c: "c"};               // The existing object
Object.assign(obj, {a, b});       // "Structuring" assignment, sort of
console.log(JSON.stringify(obj)); // "{"c":"c","a":"a","b":"b"}

*/