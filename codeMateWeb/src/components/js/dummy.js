// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.length = 0;
//     }

//     push(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//         } else {
//             let current = this.head;
//             while(current.next) {
//                 current = current.next;
//             }
//             current.next = node;
//         }
//         this.length++;
//     }

//     pop() {
//         if (!this.head ||!this.head) return null;

//         let current = this.head;
//         let prev = null;
//         while(current.next) {
//             prev = current;
//             current = current.next;
//         }
//         if (this.length < 2) {
//             this.head = null;
//         } else {
//             prev.next = null;
//         }
//         this.length--;
//         return current;
//     }

//     shift(val) {
//         const node = new Node(val);
//         if (!this.head) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.length++;
//     }

//     unshift() {
//         if (!this.head) return null;
//         this.head = this.head.next;
//         this.length--;
//     }

//     getAtIndex(index) {
//         if (index < 0 || index > this.length) return null;
//         let count = 0;
//         let current = this.head;
//         while (index != count) {
//             current = current.next;
//             count++;
//         }
//         return current;
//     }
    
//     traverse() {
//         if (!this.head) return null;
//         let current = this.head;
//         while(current) {
//             console.log(current.val);
//             current = current.next;
//         }
//     }
    
//     insertAt(index, val) {
//         let node = new Node(val);
//         if (index < 0 || index > this.length) return null;
//         if (index === 0) {
//             this.shift(val);
//         } else if (index === this.length - 1) {
//             this.push(val);
//         } else {
//             let prevNode = this.getAtIndex(index - 1);
//             node.next = prevNode.next;
//             prevNode.next = node;
//         }
//     }

//     removeAt(index) {
//         if (index > this.length - 1 || index < 0) return null;
        
//         if (index === 0){
//             return this.unshift();
//         } else if(index == this.length - 1) {
//             return this.pop();
//         } else {
//             let prevNode = this.getAtIndex(index - 1);
//             prevNode.next = prevNode.next.next;
//         }
//     }

//     setAt(index, val) {
//         if (index > this.length || index < 0) return null;
//         let count = 0;
//         let current = this.head;
//         while (current) {
//             if (count === index) {
//                 current.val = val;
//                 return;
//             }
//             current = current.next;
//             count++;
//         }
//     }
// }

// const list = new LinkedList();
// list.push(5);
// list.push(10);
// list.push(15);
// list.push(20);
// list.push(25);
// list.push(30);
// list.push(35);
// list.push(40);
// list.push(45);1
// list.getAtIndex(5);
// list.pop();
// list.shift(0);
// list.unshift();
// list.setAt(6, 99);
// list.removeAt(0);
// list.insertAt(8,0);
// console.log(list);
// list.traverse();

