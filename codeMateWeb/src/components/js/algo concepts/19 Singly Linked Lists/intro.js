/**

What is Singly Linked List
    - It is a Data Structure which stores whatever sort of data we want to store and its ordered just like an array. But in an array each element is mapped to the index but linked list consists of bunch of elements which just point to the next element.Just like bunch of train cars. 

    - Linked Lists consists of nodes and each node has a value and a pointer to another node or null

    - Head is the beginning of the Linked List and Tail is the end of the Linked List

*/

class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

const node = new Node('hey');
node.next = new Node('there');
node.next.next = new Node('how');
node.next.next.next = new Node('are');
node.next.next.next.next = new Node('you');
node.next.next.next.next.next = new Node('!!!');

console.log(node);