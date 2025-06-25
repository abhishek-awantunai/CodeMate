/*

What are Higher order and pure components?

    - A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it’s a pattern that is derived from React’s compositional nature We call them as “pure’ components” because they can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.

        - const EnhancedComponent = higherOrderComponent(WrappedComponent);
        HOC can be used for many use cases as below,
            - Code reuse, logic and bootstrap abstraction
            - Render High jacking
            - State abstraction and manipulation
            - Props manipulation

    A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

    const EnhancedComponent = higherOrderComponent(WrappedComponent)
    HOC can be used for many use cases:

    Code reuse, logic and bootstrap abstraction.
    Render hijacking.
    State abstraction and manipulation.
    Props manipulation.

How to create props proxy for HOC component?
    You can add/edit props passed to the component using props proxy pattern like this:

    function HOC(WrappedComponent) {
    return class Test extends Component {
        render() {
        const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
        }

        return <WrappedComponent {...this.props} {...newProps} />
        }
    }
    }

*/