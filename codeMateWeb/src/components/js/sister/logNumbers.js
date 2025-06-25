function logNumber() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

logNumber();


var num = 50;

function logVarNumber() {
  console.log(num);
  var num = 10;
}

logVarNumber();
