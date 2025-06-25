const getFobinacciAt = (num) => {
  return num <= 2 ? 1 : getFobinacciAt(num - 1) + getFobinacciAt(num - 2);
};

console.log(getFobinacciAt(0));

// 1 1 2 3 5 8 13 21
