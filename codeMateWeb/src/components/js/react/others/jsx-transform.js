/*

How does new JSX transform different from old transform?
    The new JSX transform doesn’t require React to be in scope. i.e, You don't need to import React package for simple scenarios.

    Let's take an example to look at the main differences between the old and the new transform,

    Old Transform:

    import React from 'react';

    function App() {
    return <h1>Good morning!!</h1>;
    }
    Now JSX transform convert the above code into regular JavaScript as below,

    import React from 'react';

    function App() {
    return React.createElement('h1', null, 'Good morning!!');
    }
    New Transform:

    The new JSX transform doesn't require any React imports

    function App() {
    return <h1>Good morning!!</h1>;
    }
    Under the hood JSX transform compiles to below code

    import {jsx as _jsx} from 'react/jsx-runtime';

    function App() {
    return _jsx('h1', { children: 'Good morning!!' });
    }
    Note: You still need to import React to use Hooks.

What are the benefits of new JSX transform?
    There are three major benefits of new JSX transform,

    It is possible to use JSX without importing React packages
    The compiled output might improve the bundle size in a small amount
    The future improvements provides the flexibility to reduce the number of concepts to learn React.

*/