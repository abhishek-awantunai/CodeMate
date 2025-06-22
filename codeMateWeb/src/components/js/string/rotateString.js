const rotateClockWise = (str, pos) => {
  return str.slice(str.length - pos, str.length) + str.slice(0, str.length - pos);
};


const rotateAntiClockWise = (str, pos) => {
  return str.slice(pos, str.length) + str.slice(0, pos);
};


console.log(rotateClockWise('applewa', 2));
console.log(rotateAntiClockWise('applewa', 2));