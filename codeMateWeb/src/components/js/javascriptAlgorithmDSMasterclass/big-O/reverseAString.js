// Approach One - with INBUILT functions

const reverseStringWithInbuiltFunction = (str) => {
  return str.split("").reverse().join("");
};

// Approach Two - with simple FOR loop

const reverseStringWithForLoop = (str) => {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
};

// Approach Three - using Recursion

const reverseStringWithRecursion = (str) => {
  return str.length < 1
    ? str
    : str.slice(str.length - 1, str.length) +
    reverseStringWithRecursion(str.slice(0, str.length - 1));
};

reverseStringWithRecursion("this is a simple matter is the");
