/*
Implement :-
sum(1)(2)(3)(4)(5)(6)(7).....(n)
*/

// const sumCallBack = () => {

// }

const sum = a => b => b ? sum(a+b) : a;

// console.log(sum(1)(2)(3)(4)(5)(6)(7)());