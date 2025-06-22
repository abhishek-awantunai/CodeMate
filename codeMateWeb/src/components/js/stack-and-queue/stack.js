/**
 * STACK - LIFO
 * the main principle is last in first out
 */

// const stack = [];

// // stack.push("Google");
// // stack.push("Instagram");
// // stack.push("Facebook");
// // stack.push("Youtube");

// // console.log(stack);
// // console.log(stack.pop());

// stack.unshift("Google");
// stack.unshift("Instagram");
// stack.unshift("Facebook");
// stack.unshift("Youtube");
// console.log(stack);

// console.log(stack.shift());

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack { }
