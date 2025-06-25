// NOTE: Below example will not work here in this file move this to index.html inside script tag to see it in action 

const arrow = () => {
    console.log(this);
}

const arrow2 = function () {
    console.log(this);
}

function normalFn() {
    console.log(this);
}

console.log(this);       // Window
console.log(window);     // Window
console.log(window === this);  // true

arrow();   // Window
arrow2();  // Window (or undefined in strict mode)
normalFn(); // Window (or undefined in strict mode)