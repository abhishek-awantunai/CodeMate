/*

How to use styles in React?

    The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.

    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')'
    };

    function HelloWorldComponent() {
        return <div style={divStyle}>Hello World!</div>
    }
    Style keys are camelCased in order to be consistent with accessing the properties on DOM nodes in JavaScript (e.g. node.style.backgroundImage).


How to combine multiple inline style objects?
    You can use spread operator in regular React:

    <button style={{...styles.panel.button, ...styles.panel.submitButton}}>{'Submit'}</button>

    If you're using React Native then you can use the array notation:

    <button style={[styles.panel.button, styles.panel.submitButton]}>{'Submit'}</button>

*/