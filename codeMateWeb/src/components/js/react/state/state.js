/*

What is a State?
    - State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.
    
    - It is a plain JS object that stores a component's dynamic data and determines components behavior.Managed within components.

    - React re renders the component whenever there is a change in state.

    - setState and useState are both asynchronous and are batched for performance gains.

Why should we not update the state directly?
    - If you try to update the state directly then it won't re-render the component.

    //Wrong
    this.state.message = 'Hello world'
    Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

    //Correct
    this.setState({ message: 'Hello World' })
    Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

What is the purpose of callback function as an argument of setState()?
    The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

    Note: It is recommended to use lifecycle method rather than this callback function.

What will happen if you use setState() in constructor?
    - When you use setState(), then apart from assigning to the object state React also re-renders the component and all its children. You would get error like this: Can only update a mounted or mounting component. So we need to use this.state to initialize variables inside constructor.

*/