/*

What are the differences between Flux and Redux?
    Below are the major differences between Flux and Redux

    Flux	
    State is mutable	
    The Store contains both state and change logic	
    There are multiple stores exist	
    All the stores are disconnected and flat	
    It has a singleton dispatcher	
    React components subscribe to the store	

    Redux
    State is immutable
    The Store and change logic are separate
    There is only one store exist
    Single store with hierarchical reducers
    There is no concept of dispatcher
    Container components uses connect function

What are the benefits of React Router V4?
    Below are the main benefits of React Router V4 module,

    In React Router v4(version 4), the API is completely about components. A router can be visualized as a single component(<BrowserRouter>) which wraps specific child router components(<Route>).
    You don't need to manually set history. The router module will take care history by wrapping routes with <BrowserRouter> component.
    The application size is reduced by adding only the specific router module(Web, core, or native)

*/