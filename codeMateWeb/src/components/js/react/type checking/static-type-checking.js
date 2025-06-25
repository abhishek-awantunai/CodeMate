/*

What are the recommended ways for static type checking?

    - Normally we use PropTypes library (React.PropTypes moved to a prop-types package since React v15.5) for type checking in the React applications. For large code bases, it is recommended to use static type checkers such as Flow or TypeScript, that perform type checking at compile time and provide auto-completion features.

    CLASS BASED COMPONENT :-

    import PropTypes from 'prop-types';

    class Greeting extends React.Component {
        render() {
            return (
            <h1>Hello, {this.props.name}</h1>
            );
        }
    }

    Greeting.propTypes = {
        name: PropTypes.string
    };

    FUNCTIONAL COMPONENT :-

    import PropTypes from 'prop-types'

    function HelloWorldComponent({ name }) {
        return (
            <div>Hello, {name}</div>
        )
    }

    HelloWorldComponent.propTypes = {
        name: PropTypes.string
    }

    export default HelloWorldComponent
*/