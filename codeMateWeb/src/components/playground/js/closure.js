console.clear()
/*
    Usage of Closures
        - Module Design Pattern
        - Currying
        - Functions like once
        - memoize
        - maintaining state in async world
        - setTimeouts
        - Iterators
*/
/*
    A function bundled together with its lexical scope is called closure
*/
function multiplyByTwo(){
    let val = 2;
    return function (num) {
        return num * val;
    }
}

/*
const multiplierFunction = multiplyByTwo();
const val1 = multiplierFunction(5);
const val2 = multiplierFunction(10);
console.log(val1);
console.log(val2);
*/

/* ------------------------------------------------------------------------------------------------------- */

// The children function uses variable a and b both, a is local variable of grandParentFn and b is local variable of parent hence children forms two closures one with parent and one with grandparent and it will look like below when the debugger is at line console.log(a, b);

/*
- Local 
    this:  undefined
- Closure (parent)
    b: 20
- Closure (grandParentFn)
    a: 10
- Script
    
- Global
    Window
*/

function grandParentFn() {
    let a = 10;
    function parent() {
        let b = 20;
        function children() {
            console.log(a, b);
        }
        children()
    }
    parent();
}

// grandParentFn();

/* ------------------------------------------------------------------------------------------------------- */

/*
    In below example the callback function inside the setTimeout function forms a closure as it remember the reference of i so wherever it goes it takes the reference to i and hence remembers it   

    This example the output is
    Hello Abhishek
    1 // after 3 seconds
*/

function x() {
    var i = 1;
    setTimeout(() => {  // this function forms a closure and remembers the reference to i
        console.log(i);
    }, 3000);
    console.log('Hello Abhishek')
}

// x();


/*
    In below example demo1 6 is printed 5 times after each second because setTimeout callback function forms closure with variable i and since variable is a var variable which is a function scoped hence in each loop the same reference will be taken and during the time of printing in console the value of the variable will be 6 
*/

function demo1() {
    for(var i = 1; i < 6; i++) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}

/*
    In below example demo2 1,2,3,4,5 is printed after each second because setTimeout callback function forms closure with variable i and since variable is a let variable which is block scoped hence in each loop a new copy is made and a new value is taken and during the time of printing in console the value of the variable will be different each time 
*/

function demo2() {
    for(let i = 1; i < 6; i++) {
        setTimeout(() => {
            console.log(i)
        }, i*1000);
    }
}

/*
    In below example demo3 1,2,3,4,5 is printed after each second because we do make a function sample and we pass i to this sample function and this function further passes value to the setTimeout callback function hence a new copy is passed as an argument each time it is called with a new value hence new value is printed after each second */

function demo3() {
    for(var i = 1; i < 6; i++) {
        function sample(i) {
            setTimeout(() => {
                console.log(i)
            }, i*1000);
        }
        sample(i);
    }
}

demo1();
// demo2();
// demo3();