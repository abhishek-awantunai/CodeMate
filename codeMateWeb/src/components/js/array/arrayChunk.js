const convertArrayToChunk = (arr, length) => {
  const outputArr = [];

  const iterationCount =
    arr.length % 2 === 0
      ? Math.floor(arr.length / length)
      : Math.floor(arr.length / length) + 1;

  for (let i = 0; i < iterationCount; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push(arr[i * length + j]);
    }
    // const temp = arr.slice(i * length, length * (i + 1));
    outputArr.push(temp);
  }

  return outputArr;
};

console.log(convertArrayToChunk([1, 2, 34, 2, 22, 4, 32, 17, 23, 21, 12], 2));
