/*

What are fragments?
    It's a common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

    render() {
        return (
            <React.Fragment>
                <ChildA />
                <ChildB />
                <ChildC />
            </React.Fragment>
        )
    }

    There is also a shorter syntax, but it's not supported in many tools:

    render() {
        return (
            <>
            <ChildA />
            <ChildB />
            <ChildC />
            </>
        )
    }

Why fragments are better than container divs?
    - Below are the list of reasons,

    - Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    The DOM Inspector is less cluttered.

*/