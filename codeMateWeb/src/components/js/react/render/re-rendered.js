/*

What is the methods order when component re-rendered?
    An update can be caused by changes to props or state. The below methods are called in the following order when a component is being re-rendered.

    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

*/