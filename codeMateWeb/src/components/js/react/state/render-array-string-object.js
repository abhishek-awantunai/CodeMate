/*

How do you render Array, Strings and Numbers in React 16 Version?
    Arrays: Unlike older releases, you don't need to make sure render method return a single element in React16. You are able to return multiple sibling elements without a wrapping element by returning an array.

    For example, let us take the below list of developers,

    const ReactJSDevs = () => {
    return [
        <li key="1">John</li>,
        <li key="2">Jackie</li>,
        <li key="3">Jordan</li>
    ];
    }
    You can also merge this array of items in another array component.

    const JSDevs = () => {
    return (
        <ul>
        <li>Brad</li>
        <li>Brodge</li>
        <ReactJSDevs/>
        <li>Brandon</li>
        </ul>
    );
    }
    Strings and Numbers: You can also return string and number type from the render method.

    render() {
    return 'Welcome to ReactJS questions';
    }
    // Number
    render() {
    return 2018;
    }

*/