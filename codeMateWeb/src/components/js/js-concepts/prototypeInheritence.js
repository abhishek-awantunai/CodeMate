/**

Inheritance in JS is one object trying to access properties and methods of another object.

Whenever we create a JS object / array / function then JS engine automatically attaches object with some properties and functions to our newly created object.These are the hidden properties and functions that we can access. This hidden object that gets automatically attached is called as prototype.

We can see the hidden properties attached using __proto__

let arr = [1, 2, 3];

let obj = {
    name: 'Abhishek',
    age: 29
}

function fun () {
    console.log('fun');
}

arr.__proto__ = Array.prototype
arr.__proto__.__proto__ = Object.prototype
arr.__proto__.__proto__.__proto__ = null


Whenever we create an array it has its prototype which is Array.prototype and Array.prototype object also has a prototype Object.prototype and the Object.prototype refers to null. So this chain of prototype is called as prototype chain.

Everything in JS is Object this statement comes from here : -
Whether we make array / function / object then down the prototype chain it is an Object hence it is said that everything in JS is Object. 

Classical Inheritance that exists in other languages is very different from what exists in JavaScript Prototypal Inheritance.

Inheritance is one object trying to access  method and properties of another object.

Prototype :-
    - Whenever we create a javascript object JS Engine automatically attaches our object with some hidden properties and functions which we can access using .
    - If we want to access that hidden object we can use .__proto__
    - So it is just an object which is attached to each an every method, object or an array or a function is called prototype
    - Every object in JS has its own prototype.
    - arr.__proto__ == Array.prototype     
    - arr.__proto__.__proto__ = Object.prototype
    - arr.__proto__.__proto__.__proto__ = null

    - Every object, function, method, array down the prototype chain happens to be an Object hence its called everything in JS is Object
    - let obj1 = {
        name: 'foo',
    }
    let obj2 = {
        city: 'wonderland',
    }
    - we if we do obj1.__proto__ = obj2
    - then we can use obj1.city as well
    - This is what prototypal inheritance is where one object is inheriting properties and methods from other object 

*/