/*

What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?
    If the ownProps parameter is specified, React Redux will pass the props that were passed to the component into your connect functions. So, if you use a connected component:

    import ConnectedComponent from './containers/ConnectedComponent';

    <ConnectedComponent user={'john'} />
    The ownProps inside your mapStateToProps() and mapDispatchToProps() functions will be an object:

    { user: 'john' }
    You can use this object to decide what to return from those functions.

How to structure Redux top level directories?
    Most of the applications has several top-level directories as below:

    Components: Used for dumb components unaware of Redux.
    Containers: Used for smart components connected to Redux.
    Actions: Used for all action creators, where file names correspond to part of the app.
    Reducers: Used for all reducers, where files name correspond to state key.
    Store: Used for store initialization.
    This structure works well for small and medium size apps.

*/