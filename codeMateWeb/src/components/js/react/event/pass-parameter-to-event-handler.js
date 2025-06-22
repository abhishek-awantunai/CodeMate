/*

How to pass a parameter to an event handler or callback?
    
    You can use an arrow function to wrap around an event handler and pass parameters:

    <button onClick={() => this.handleClick(id)} />
    This is an equivalent to calling .bind:

    <button onClick={this.handleClick.bind(this, id)} />
    Apart from these two approaches, you can also pass arguments to a function which is defined as arrow function

    <button onClick={this.handleClick(id)} />
    handleClick = (id) => () => {
        console.log("Hello, your ticket number is", id)
    };

How to bind methods or event handlers in JSX callbacks?

    There are 3 possible ways to achieve this:

    Binding in Constructor: 
    
    In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor.

        class Foo extends Component {
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
            }
            handleClick() {
                console.log('Click happened');
            }
            render() {
                return <button onClick={this.handleClick}>Click Me</button>;
            }
        }

    Public class fields syntax: If you don't like to use bind approach then public class fields syntax can be used to correctly bind callbacks.

    handleClick = () => {
        console.log('this is:', this)
    }
    <button onClick={this.handleClick}>
        {'Click me'}
    </button>
    
    Arrow functions in callbacks: You can use arrow functions directly in the callbacks.

    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <button onClick={() => this.handleClick()}>Click Me</button>;
    }
    Note: If the callback is passed as prop to child components, those components might do an extra re-rendering. In those cases, it is preferred to go with .bind() or public class fields syntax approach considering performance.

*/