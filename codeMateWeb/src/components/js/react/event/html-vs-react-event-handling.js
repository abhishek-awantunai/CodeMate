/*

What is the difference between HTML and React event handling?
    Below are some of the main differences between HTML and React event handling,

In HTML, the event name usually represents in lowercase as a convention:

<button onclick='activateLasers()'>
Whereas in React it follows camelCase convention:

<button onClick={activateLasers}>
In HTML, you can return false to prevent default behavior:

<a href='#' onclick='console.log("The link was clicked."); return false;' />
Whereas in React you must call preventDefault() explicitly:

function handleClick(event) {
  event.preventDefault()
  console.log('The link was clicked.')
}
In HTML, you need to invoke the function by appending () Whereas in react you should not append () with the function name. (refer "activateLasers" function in the first point for example)

*/