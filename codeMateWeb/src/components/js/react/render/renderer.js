/*

What is the required method to be defined for a class component?
    The render() method is the only required method in a class component. i.e, All methods other than render method are optional for a class component.

What are the possible return types of render method?
    Below are the list of following types used and return from render method,

    React elements: Elements that instruct React to render a DOM node. It includes html elements such as <div/> and user defined elements.
    Arrays and fragments: Return multiple elements to render as Arrays and Fragments to wrap multiple elements
    Portals: Render children into a different DOM subtree.
    String and numbers: Render both Strings and Numbers as text nodes in the DOM
    Booleans or null: Doesn't render anything but these types are used to conditionally render content.

*/