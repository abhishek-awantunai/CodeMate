class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return (
          "can not insert " + value + " as this already extists in the BST"
        );
      }
    }
    return this;
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];
    const current = this.root;

    function traversal(node) {
      data.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    }

    traversal(current);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    const current = this.root;

    function traversal(node) {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.value);
    }

    traversal(current);
    return data;
  }

  DFSInOrder() {
    const data = [];
    const current = this.root;

    function traversal(node) {
      if (node.left) traversal(node.left);
      data.push(node.value);
      if (node.right) traversal(node.right);
    }

    traversal(current);
    return data;
  }
}

/**
 *                             10
 *                    7                12
 *             5            8                  15
 *     3                                               16
 * 2                                                           18
 */

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(12);
tree.insert(15);
tree.insert(16);
tree.insert(18);
tree.insert(7);
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(2);
console.log(tree);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
