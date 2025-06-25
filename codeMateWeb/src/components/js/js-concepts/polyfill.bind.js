/* 

Polyfill :-
    - It is a browser fallback

The Angular CLI provides support for polyfills officially. When you create a new project with the ng new command, a src/polyfills.ts configuration file is created as part of your project folder. This file includes the mandatory and many of the optional polyfills as JavaScript import statements. Let's categorize the polyfills,

Mandatory polyfills: These are installed automatically when you create your project with ng new command and the respective import statements enabled in 'src/polyfills.ts' file.
Optional polyfills: You need to install its npm package and then create import statement in 'src/polyfills.ts' file. For example, first you need to install below npm package for adding web animations (optional) polyfill. bash npm install --save web-animations-js and create import statement in polyfill file. javascript import 'web-animations-js';

*/


const obj = {
    name: 'Abhishek'
};
const getName = function(city, pinCode, state) {
    return this.name + ' ' + city + ' ' + pinCode + ' ' + state;
} 

const fn1 = getName.bind(obj, 'Patna', 201301, 'Bihar');
console.log(fn1());

Function.prototype.myCustomBind = function(...args) {
    return () => this.call(args[0], ...args.slice(1));
};

const fn2 = getName.myCustomBind(obj, 'Patna', 201301, 'Bihar');
console.log(fn2());