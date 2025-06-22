class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let list1 = new ListNode(1);
list1.next = new ListNode(5);
list1.next.next = new ListNode(6);

let list2 = new ListNode(4);
list2.next = new ListNode(2);
list2.next.next = new ListNode(5);

// 1 -> 5 -> 6        ----------> 651
// 4 -> 2 -> 5        ----------> 524
// 5 -> 7 -> 1 -> 1   ----------> 1175

const addTwoNumbers = (l1, l2) => {
  let carryOver = 0;
  let result = new ListNode(0);
  let currentNode = result;

  while (l1 != null || l2 != null) {
    let val1 = 0;
    let val2 = 0;

    if (l1 != null) {
      val1 = l1.value;
      l1 = l1.next;
    }

    if (l2 != null) {
      val2 = l2.value;
      l2 = l2.next;
    }

    let sum = val1 + val2 + carryOver;
    carryOver = Math.floor(sum / 10);
    sum = sum % 10;
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
  }
  if (carryOver > 0) {
    currentNode.next = new ListNode(carryOver);
  }
  return result.next;
};

console.log(addTwoNumbers(list1, list2));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const addLists = (list1, list2) => {
//   let result = new Node(0);
//   let carryOver = 0;
//   let currentNode = result;

//   while (list1 !== null || list2 !== null) {
//     let val1 = 0;
//     let val2 = 0;

//     if (list1) {
//       val1 = list1.value;
//       list1 = list1.next;
//     }

//     if (list2) {
//       val2 = list2.value;
//       list2 = list2.next;
//     }

//     let sum = val1 + val2 + carryOver;
//     carryOver = Math.floor(sum / 10);
//     sum = sum % 10;
//     currentNode.next = new Node(sum);
//     currentNode = currentNode.next;
//   }

//   if (carryOver > 0) {
//     currentNode.next = new Node(carryOver);
//   }

//   return result.next;
// };

// const list1 = new Node(1);
// list1.next = new Node(2);
// list1.next.next = new Node(3);

// const list2 = new Node(5);
// list2.next = new Node(4);
// list2.next.next = new Node(1);

// console.log(addLists(list1, list2));
