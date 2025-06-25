/*

What is the lifecycle methods order in mounting?
    The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()


What are the lifecycle methods going to be deprecated in React v16?
    The following lifecycle methods going to be unsafe coding practices and will be more problematic with async rendering.

    componentWillMount()
    componentWillReceiveProps()
    componentWillUpdate()
    Starting with React v16.3 these methods are aliased with UNSAFE_ prefix, and the unprefixed version will be removed in React v17.

*/