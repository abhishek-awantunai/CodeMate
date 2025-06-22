a();
// b();

//Function statements aka Function Declaration
function a() {
    console.log('a called');
}

//Function declarations
var b = function() {
    console.log('b called');
}

// Anonymous  Function - A function without a name is a an anonymous function. They do not have their own identity
// Function statements can't be without name

// Named function expressions
const c = function d() {
    console.log('d c called');
}
// c(); -> consoles d c called
// d(); -> throws a Reference error as d is not defined because d is in local memory but not in global scope

// Higher order functions

// Difference between parameters and arguments
var fn = function(parameter) {
    // this is parameter
    console.log(parameter);
}

let argu = 5;
fn(argu);  // this is called argument


/* 
First class functions aka first class citizen
    - The ability of functions to be used as values and can be passed as an argument or to be returned as a function is called first class function.So its programming a concept.
    This ability is know as first class function.
*/

/*
High Order Functions :-
    - A higher-order function is a function that does at least one of the following: takes one or more functions as arguments, returns a function as its result.
*/


// Arrow Functions
const arrow = () => {
    console.log('arrow');
};

arrow();