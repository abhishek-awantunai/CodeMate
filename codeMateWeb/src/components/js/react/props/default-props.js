/*

What are default props?
    The defaultProps are defined as a property on the component class to set the default props for the class. This is used for undefined props, but not for null props.

    For example, let us create color default prop for the button component,

    class MyButton extends React.Component {
    // ...
    }

    MyButton.defaultProps = {
    color: 'red'
    };
    If props.color is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses default value

    render() {
    return <MyButton /> ; // props.color will be set to red
    }
    Note: If you provide null value then it remains null value.

Why should not call setState in componentWillUnmount?
    You should not call setState() in componentWillUnmount() because once a component instance is unmounted, it will never be mounted again.

*/