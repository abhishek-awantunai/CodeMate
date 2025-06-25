/*

Is ref argument available for all functions or class components?
    Regular function or class components don’t receive the ref argument, and ref is not available in props either. The second ref argument only exists when you define a component with React.forwardRef call.

Why do you need additional care for component libraries while using forward refs?
    When you start using forwardRef in a component library, you should treat it as a breaking change and release a new major version of your library. This is because your library likely has a different behavior such as what refs get assigned to, and what types are exported. These changes can break apps and other libraries that depend on the old behavior.

How to create react class components without ES6?
    If you don’t use ES6 then you may need to use the create-react-class module instead. For default props, you need to define getDefaultProps() as a function on the passed object. Whereas for initial state, you have to provide a separate getInitialState method that returns the initial state.

    var Greeting = createReactClass({
    getDefaultProps: function() {
        return {
            name: 'Jhohn'
        };
        },
    getInitialState: function() {
        return {message: this.props.message};
        },
    handleClick: function() {
        console.log(this.state.message);
    },
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    });
    Note: If you use createReactClass then auto binding is available for all methods. i.e, You don't need to use .bind(this) with in constructor for event handlers.



*/