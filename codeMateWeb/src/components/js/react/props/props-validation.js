/*

How to apply validation on props in ReactJS?

    When the application is running in development mode, React will automatically check for all props that we set on components to make sure they must right correct and right data type. For incorrect type, it will generate warning messages in the console for development mode whereas it is disabled in production mode due performance impact. The mandatory prop is defined with isRequired.

    The set of predefined prop types are below

    React.PropTypes.string
    React.PropTypes.number
    React.PropTypes.func
    React.PropTypes.node
    React.PropTypes.bool
    For example, we define propTypes for user component as below,

    import PropTypes from 'prop-types';

    class User extends React.Component {
    render() {
        return (
        <h1>Welcome, {this.props.name}</h1>
        <h2>Age, {this.props.age}
        );
    }
    }

    User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired

    };


*/