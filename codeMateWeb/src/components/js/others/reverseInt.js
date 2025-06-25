const reverseInt = (num) => {
  return num > -1
    ? Number(("" + num).split("").reverse().join(""))
    : -1 * Number(("" + num * -1).split("").reverse().join(""));
};

console.log(reverseInt(987));
