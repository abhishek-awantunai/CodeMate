/*

What is Relay?
    Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer.

How Relay is different from Redux?
    - Relay is similar to Redux in that they both use a single store. The main difference is that relay only manages state originated from the server, and all access to the state is used via GraphQL queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching for you, by fetching only changed data and nothing more.

What is an action in Redux?
    Actions are plain JavaScript objects or payloads of information that send data from your application to your store. They are the only source of information for the store. Actions must have a type property that indicates the type of action being performed.

    For example, let's take an action which represents adding a new todo item:

    {
        type: ADD_TODO,
        text: 'Add todo item'
    }

*/