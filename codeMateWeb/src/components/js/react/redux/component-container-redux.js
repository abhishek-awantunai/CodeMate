/*

What is the difference between component and container in React Redux?
    Component is a class or function component that describes the presentational part of your application.
    Container is an informal term for a component that is connected to a Redux store. Containers subscribe to Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.

What is the purpose of the constants in Redux?
    Constants allows you to easily find all usages of that specific functionality across the project when you use an IDE. It also prevents you from introducing silly bugs caused by typos – in which case, you will get a ReferenceError immediately.

    Normally we will save them in a single file (constants.js or actionTypes.js).

    export const ADD_TODO = 'ADD_TODO'
    export const DELETE_TODO = 'DELETE_TODO'
    export const EDIT_TODO = 'EDIT_TODO'
    export const COMPLETE_TODO = 'COMPLETE_TODO'
    export const COMPLETE_ALL = 'COMPLETE_ALL'
    export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
    In Redux, you use them in two places:

    During action creation:

    Let's take actions.js:

    import { ADD_TODO } from './actionTypes';

    export function addTodo(text) {
    return { type: ADD_TODO, text }
    }
    In reducers:

    Let's create reducer.js:

    import { ADD_TODO } from './actionTypes'

    export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        return [
            ...state,
            {
            text: action.text,
            completed: false
            }
        ];
        default:
        return state
    }
    }

*/