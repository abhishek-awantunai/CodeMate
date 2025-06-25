const obj = {
  a: "sd",
  b: false,
  c: function () { }, // not valid in JSON
  d: [],
  e: {},
  f: undefined, // not valid in JSON
  g: 12,
};


// We can not have undefined or a function in JSON
