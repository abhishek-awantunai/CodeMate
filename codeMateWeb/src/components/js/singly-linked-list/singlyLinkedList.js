class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // create a new node
    const newNode = new Node(val);

    // check if head is empty i.e linked list was blank
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // check if head is not empty i.e linked list was not blank

      // set tail next to be the new node
      this.tail.next = newNode;

      // and update the tail
      this.tail = newNode;
    }

    // increment the length
    this.length++;

    // return updated list
    return this;
  }

  pop() {
    // check if list was empty then return undefined as nothing can be popped out
    if (!this.head) return undefined;

    // set current pointer to head
    let current = this.head;

    // also set tail pointer to be current pointer
    let newTail = current;

    // repeat uptil current next exists so as to reach tail
    while (current.next) {
      // set current pointer in newtail
      newTail = current;

      // and updated current to be the next pointer
      current = current.next;
    }

    // when current.next is null i.e we reached at last position
    // update tail to be the new tail
    this.tail = newTail;

    // remove tail next pointer by setting it to tail
    this.tail.next = null;

    // decrement length
    this.length--;

    // if length is 0 i.e list is empty then set tail and head to be null
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    // list is already empty return undefined as nothing can be further removed
    if (!this.head) return undefined;

    // set temporary current head to head
    let currenthead = this.head;
    // set new head position to be current head next position
    this.head = currenthead.next;
    // decrement lenght
    this.length--;

    // if length does not exists then reset head as well as tail
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currenthead;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index) return current;
      current = current.next;
      i++;
    }
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if ((index = this.length)) return this.push(value);
    if ((index = 0)) return this.unshift(value);
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.lenght++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    let current = this.head;
    let data = [];

    while (current) {
      data.push(current.value);
      current = current.next;
    }

    return data;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hey");
list.push("Hi");
list.push("there");
list.push("boy");
list.push("How");
list.push("are");
list.push("you");
list.push("just");
list.push("got");
list.push("to");
list.push("listen");
list.push("about");
list.push("you");
// list.pop();
list.unshift("!!!");
// list.set(0, "asasa");

console.log(list.print());
