/*

useState is one of build-in react hooks. useState(0) returns a tuple where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counter's state.

We can use the setCounter method to update the state of count anywhere - In this case we are using it inside of the setCount function where we can do more things; the idea with hooks is that we are able to keep our code more functional and avoid class based components if not desired/needed.

React useState and setState don’t make changes directly to the state object; they create queues to optimize performance, which is why the changes don’t update immediately. The process to update React state is asynchronous for performance reasons.

*/