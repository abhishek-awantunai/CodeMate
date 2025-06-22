const data1 = "Kala Khatta Wala Mumma";

const data2 = [].filter.call(data1, function (element, index) {
  return index > 6;
}).join('');

console.log(data2); // ["a", "t","t","a","W","a","l","a","M","u","m"]


