/*

What are Redux selectors and why to use them?
    Selectors are functions that take Redux state as an argument and return some data to pass to the component.

    For example, to get user details from the state:

    const getUserData = state => state.user.data
    
    These selectors have two main benefits,
        - The selector can compute derived data, allowing Redux to store the minimal possible state
        - The selector is not recomputed unless one of its arguments changes

What is Redux Form?
    - Redux Form works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets and React Bootstrap.

What are the main features of Redux Form?
    Some of the main features of Redux Form are:
        - Field values persistence via Redux store.
        - Validation (sync/async) and submission.
        - Formatting, parsing and normalization of field values

*/