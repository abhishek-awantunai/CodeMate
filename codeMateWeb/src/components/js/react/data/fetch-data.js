/*

How to fetch data with React Hooks?
    The effect hook called useEffect is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook’s update function.

    Let's take an example in which it fetches list of react articles from the API

    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function App() {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        (async () => {
        const result = await axios(
            'http://hn.algolia.com/api/v1/search?query=react',
        );

        setData(result.data);
        })()
    }, []);

    return (
        <ul>
        {data.hits.map(item => (
            <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
            </li>
        ))}
        </ul>
    );
    }

    export default App;
    Remember we provided an empty array as second argument to the effect hook to avoid activating it on component updates but only on mounting of the component. i.e, It fetches only on component mount.

Is Hooks cover all use cases for classes?
    Hooks doesn't cover all use cases of classes but there is a plan to add them soon. Currently there are no Hook equivalents to the uncommon getSnapshotBeforeUpdate and componentDidCatch lifecycles yet.

What is the stable release for hooks support?
    React includes a stable implementation of React Hooks in 16.8 release for below packages

    React DOM
    React DOM Server
    React Test Renderer
    React Shallow Renderer

*/