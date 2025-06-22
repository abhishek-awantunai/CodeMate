/* 

Are custom DOM attributes supported in React v16?
    Yes. In the past, React used to ignore unknown DOM attributes. If you wrote JSX with an attribute that React doesn't recognize, React would just skip it.

    For example, let's take a look at the below attribute:

    <div myCustomAttribute={'something'} />
    Would render an empty div to the DOM with React v15:

    <div />
    In React v16 any unknown attributes will end up in the DOM:

    <div myCustomAttribute='something' />
    This is useful for supplying browser-specific non-standard attributes, trying new DOM APIs, and integrating with opinionated third-party libraries.

*/