/*

  A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.But the opposite is not true;

  Scope means where we can access a specific variable or a function in our code.

  Scope is directly dependant on the lexical environment
  
  Whenever a execution environment is created a lexical environment is also created so lexical environment is local memory + lexical environment of its parent.

  Lexical Environment = local memory + lexical environment of parent

  Lexical means in hierarchy or in a sequence or in order 

  function a() { 
    var b = 10;
    c();
    function c() { 
      console.log(b);
    } 
  }
  a();

  So here function c is lexically sitting inside function a
  function c is lexically inside function a
  and function c is lexically inside global scope

  Whenever a execution environment is created then in that execution context's memory a reference to its parents lexical environment is also present

  The mechanism of finding variables in the local memory then it went to the reference to the parent lexical environment then it moves to parent of that lexical environment then again to its parent so this way of finding variables is known as scope chain.
  
  So scope chain is nothing but chain of lexical environments and the parent references.So if JS engine does not find a value in local scope then its moves one level up to the parent's lexical scope reference until it encounters null.This is called scope chain.

  Lexical environment is created whenever a execution context is created so lexical environment is local memory + reference to the parent's lexical environment

*/
