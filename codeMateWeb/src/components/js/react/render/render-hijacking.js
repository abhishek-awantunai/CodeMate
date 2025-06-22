/*
How to pass numbers to React component?
    You should be passing the numbers via curly braces({}) where as strings in quotes
        React.render(<User age={30} department={"IT"} />, document.getElementById('container'));

What is render hijacking in react?
    The concept of render hijacking is the ability to control what a component will output from another component. It means that you decorate your component by wrapping it into a Higher-Order component. By wrapping, you can inject additional props or make other changes, which can cause changing logic of rendering. It does not actually enable hijacking, but by using HOC you make your component behave differently.

What are HOC factory implementations?
    There are two main ways of implementing HOCs in React.

    Props Proxy (PP) and
    Inheritance Inversion (II).
    But they follow different approaches for manipulating the WrappedComponent.

    Props Proxy

    In this approach, the render method of the HOC returns a React Element of the type of the WrappedComponent. We also pass through the props that the HOC receives, hence the name Props Proxy.

    function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
    render() {
        return <WrappedComponent {...this.props}/>
    }
    }
    }
    Inheritance Inversion

    In this approach, the returned HOC class (Enhancer) extends the WrappedComponent. It is called Inheritance Inversion because instead of the WrappedComponent extending some Enhancer class, it is passively extended by the Enhancer. In this way the relationship between them seems inverse.

    function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
    render() {
        return super.render()
    }
    }
    }

*/