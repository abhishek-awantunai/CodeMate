/*

- An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.

    - React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML.
    - <Button onPress={lightItUp} />

- Synthetic events
    - It is actually a cross-browser wrapper around the browser’s native event. These events have interface stopPropagation() and preventDefault().
    - Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers.The application is consistent regardless of the browser it is running in. Here, preventDefault is a synthetic event.

- It is a wrapper around actual events


- Describe how events are handled in React
    - In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers.

    What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.

How events are different in React?
Handling events in React elements has some syntactic differences:

React event handlers are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

*/