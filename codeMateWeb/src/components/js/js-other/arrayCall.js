const data1 = "Kala Khatta Wala Mumma";

const data2 = [].filter.call(data1, function (element, index) {
  return index > 6;
});

console.log(data2); //
