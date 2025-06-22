/*

What is Redux Thunk?
    - Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters.

What are the differences between redux-saga and redux-thunk?
    - Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk uses Promises to deal with them, whereas Saga uses Generators. Thunk is simple to use and Promises are familiar to many developers, Sagas/Generators are more powerful but you will need to learn them. But both middleware can coexist, so you can start with Thunks and introduce Sagas when/if you need them.

What is Redux DevTools?
    - Redux DevTools is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.


What are the features of Redux DevTools?
    Some of the main features of Redux DevTools are below,
        - Lets you inspect every state and action payload.
        - Lets you go back in time by cancelling actions.
        - If you change the reducer code, each staged action will be re-evaluated.
        - If the reducers throw, you will see during which action this happened, and what the error was.
        - With persistState() store enhancer, you can persist debug sessions across page reloads





*/