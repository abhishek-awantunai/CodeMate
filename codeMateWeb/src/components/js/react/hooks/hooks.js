/*

React hooks allows you to use State, and other React features without writing a class.

Added in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible. This page provides an overview of Hooks for experienced React users.

Primarily, hooks in general enable the extraction and reuse of stateful logic that is common across multiple components without the burden of higher order components or render props. Hooks allow to easily manipulate the state of our functional component without needing to convert them into class components.

Hooks don’t work inside classes (because they let you use React without classes). By using them, we can totally avoid using lifecycle methods, such as componentDidMount, componentDidUpdate, componentWillUnmount. Instead, we will use built-in hooks like useEffect

- useState
- useCallback
- useEffect
- useRef
- useContext
- useMemo

- Do Hooks replace render props and higher-order components (HOC)?

    Often, render props and higher-order components render only a single child. React team thinks Hooks are a simpler way to serve this use case.

    There is still a place for both patterns (for example, a virtual scroller component might have a renderItem prop, or a visual container component might have its own DOM structure). But in most cases, Hooks will be sufficient and can help reduce nesting in your tree.

*/