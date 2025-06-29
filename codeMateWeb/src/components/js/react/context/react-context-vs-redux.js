/*

When do you use React Context vs Redux?

Redux is probably the most commonly used third-party global state library for React, but you can replace the word "Redux" with any global state library for React.
React context is a way to provide and consume data throughout our application without using props.

React context helps us prevent the problem of "props drilling", which is when you are passing data with props through components that don't need it.

Instead, with context we can consume the data exactly in the component that needs it.

While we only use Context to get or "read" values globally in our application, Redux and other third-party state libraries allow us to both read and update state.

Context is not a replacement for a third-party state library like Redux because it is not built for state updates. This is because any time the value provided on Context changes, all of its children will re-render, which can hurt performance

*/