/*

Must prop be named as render for render props?
    Even though the pattern named render props, you don’t have to use a prop named render to use this pattern. i.e, Any prop that is a function that a component uses to know what to render is technically a “render prop”. Lets take an example with the children prop for render props,

    <Mouse children={mouse => (
    <p>The mouse position is {mouse.x}, {mouse.y}</p>
    )}/>
    Actually children prop doesn’t need to be named in the list of “attributes” in JSX element. Instead, you can keep it directly inside element,

    <Mouse>
    {mouse => (
        <p>The mouse position is {mouse.x}, {mouse.y}</p>
    )}
    </Mouse>
    While using this above technique(without any name), explicitly state that children should be a function in your propTypes.

    Mouse.propTypes = {
    children: PropTypes.func.isRequired
    };

What are the problems of using render props with pure components?
    If you create a function inside a render method, it negates the purpose of pure component. Because the shallow prop comparison will always return false for new props, and each render in this case will generate a new value for the render prop. You can solve this issue by defining the render function as instance method.

How do you create HOC using render props?
    You can implement most higher-order components (HOC) using a regular component with a render prop. For example, if you would prefer to have a withMouse HOC instead of a component, you could easily create one using a regular with a render prop.

    function withMouse(Component) {
    return class extends React.Component {
        render() {
        return (
            <Mouse render={mouse => (
            <Component {...this.props} mouse={mouse} />
            )}/>
        );
        }
    }
    }
    This way render props gives the flexibility of using either pattern.

*/