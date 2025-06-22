class Node {
  value;
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

// Pushing inside a singly linked list
const push = (node) => {
  if (!list) {
    list = node;
    return list;
  }

  let current = list;
  while (current) {
    if (current.next === null) {
      current.next = node;
      return list;
    }
    current = current.next;
  }
};

// Popping inside a singly linked list
const pop = () => {
  if (!list) return null;

  let prev = list;
  let current = list.next;
  while (current) {
    if (current.next === null) {
      prev.next = null;
      return list ? list : null;
    }
    prev = current;
    current = current.next;
  }
  return null;
};

// Shift a list
const shift = () => {
  list = list.next;
  return list;
};

// Unshift a list
const unshift = (node) => {
  node.next = list;
  list = node;
  return list;
};

// Delete at an index
const deleteAt = (index) => {
  if (!list) return false;
  if (index === 0) shift();
  let position = 0;
  let current = list.next;
  let prev = list;
  while (current) {
    if (position === index - 1) {
      prev.next = current.next;
      return list;
    }
    prev = current;
    current = current.next;
    position++;
  }

  return null;
};

// Get an index at this position
const getAtIndex = (index) => {
  let position = 0;
  let current = list;

  while (current) {
    if (position === index) {
      return current;
    }
    position++;
    current = current.next;
  }
  return -1;
};

// Edit at a particular index
const editAtIndex = (index, val) => {
  if (!list) return false;
  let current = list;
  let position = 0;

  while (current) {
    if (position === index) {
      current.value = val;
      return true;
    }
    position++;
    current = current.next;
  }
  return false;
};

// Reverse a list
const reverseList = () => {
  let current = list;
  let arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    push(new Node(arr[i]));
  }
  return list;
};

let list = null;

push(new Node(12));
push(new Node(13));
push(new Node(14));
push(new Node(15));
push(new Node(16));
push(new Node(17));
push(new Node(18));
push(new Node(19));
push(new Node(20));
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop()
// shift();
// unshift(new Node("Twelve"))
// console.log(deleteAt(9));
// console.log(getAtIndex(9));
// console.log(editAtIndex(8, "Twelve"));

console.log(reverseList());
