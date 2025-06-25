/*

How to create components in React?

    There are two possible ways to create a component.
    
    Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as the first parameter and return React elements:

    function Greeting({ message }) {
        return <h1>{`Hello, ${message}`}</h1>
    }

    Class Components: You can also use ES6 class to define a component. The above function component can be written as:

    class Greeting extends React.Component {
        render() {
            return <h1>{`Hello, ${this.props.message}`}</h1>
        }
    }

*/