/*
What is the purpose of callback function as an argument of setState()?
    - setState function takes an optional callback parameter that can be used to make updates after the state is changed.This function will get called once the state has been updated and the callback will receive the updated value of the state.

    - The callback function is invoked when setState finished and the component gets rendered. Since setState() is asynchronous the callback function is used for any post action.

    Note: It is recommended to use lifecycle method rather than this callback function.

    setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))

Why should we not update the state directly?
    If you try to update the state directly then it won't re-render the component.

    //Wrong
    this.state.message = 'Hello world'
    Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

    //Correct
    this.setState({ message: 'Hello World' })
    Note: You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.

*/