/**
    if any variable is declared without var then it is a GLOBAL variable and it will overwrite
    any variable of same name if it exist.

    In strict mode you can't create a GLOBAL variable
 */

    console.log((function doubleNumber(num) {
      a = 10;
      return num * a;
  })(4));
  
  a = 20;
  
  // creation of Global Variable is restricted in strict mode
  // this will throw Reference Error as it's restricted because we can't create a GLOBAL variable
  //  in STRICT mode and any variable declared without var is a Global Variable
  console.log(a);
  var a = 10;
  console.log(a);
  