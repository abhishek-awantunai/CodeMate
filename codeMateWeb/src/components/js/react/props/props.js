/*

What are props?
    - Plain JS objects that are passed from one React component to another.
    - Props are passed via HTML attributes.
    - Props are read only properties

    - We can send data from parent to child components using props.

    It is not possible to update the value of props as it is immutable

    Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

    The primary purpose of props in React is to provide following component functionality:

    Pass custom data to your component.
    Trigger state changes.
    Use via this.props.reactProp inside component's render() method.
    For example, let us create an element with reactProp property:

    <Element reactProp={'1'} />
    This reactProp (or whatever you came up with) name then becomes a property attached to React's native props object which originally already exists on all components created using React library.

    props.reactProp

Name any five predefined prototypes used in React

    Most important protoype used in React js are:

    number
    string
    array
    object
    element

*/