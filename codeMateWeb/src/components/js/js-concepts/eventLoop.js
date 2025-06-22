/**

What is Javascript?
  - It is a single threaded non blocking asynchronous concurrent language.It has a call stack, event loop a callback queue and some other apis stuff.

  V8 - do have call stack and heap.

  CALL STACK - 16000 times call limit
  one thread === one call stack === one thing at a time
  - It is basically a data structure which records basically where in a program we are.

  - Asynchronous code - we run some code give it a callback and we run that later.

  - Async code and call stack

  - Concurrency and the event loop
    - one thing at a time except not really.

  - Javascript runtime i.e v8 engine can only do one things at a time.
  It can't make ajax request while you are running another code.

  But the reason we can do things concurrently is that the browser is more than just the runtime.

  Web API === C++ API for Node

  Browser runtime can only do one thing at a time but browser also gives us these other things like Web Api's which are effectively threads that you can't access like threads you can just make calls to.And those pieces of the browser are the place where concurrency kicks in.
Browser runtime can only do one thing at a time but browser also Browser runtime can only do one thing at a time but browser also gives us these other things like Web Api's which are effectively threads that you can't access like threads you can just make calls to.And those pieces of the browser are the place where concurrency kicks in.
 runtime can only do one thing at a time but browser also gives us these other things like Web Api's which are effectively threads that you can't access like threads you can just make calls to.And those pieces of the browser are the place where concurrency kicks in.
es us these other things like Web Api's which are effectively threads that you can't access like threads you can just make calls to.And those pieces of the browser are the place where concurrency kicks in.

  When we call setTimeout, we pass callback function and a delay.setTimeout is an API provided by web browser as it does not lives in v8 engine source.Its like extra  stuff we get in the browser environment in which we are running the javascript runtime.

  Now we get this timer in this Web API which gets completes after certain time.But after completion of time.Web API's can't just like modify your code in middle when it is ready.This is where Task Queue or Callback Queue kicks in.So basically when a web API is done they push the callback into the task queue.Then finally event loop comes.

  What is event loop?

  https Event loop has one very simple job i.e to look at the stack and then look at the task queue if the stack is empty, it takes the first things in the task queue and pushed it into call stack which effectively runs it.

  If we have attached an event to an element then on occurrence of that event the code first goes to callback queue and then event look checks if the call stack is empty then only it call stack is empty then it gets pushed to call stack and finally the event is called.

  SetTimeout is not a guaranteed time of execution but it is minimum time of execution

*/