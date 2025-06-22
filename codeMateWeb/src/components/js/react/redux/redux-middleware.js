/*

How to add multiple middlewares to Redux?
    You can use applyMiddleware().

    For example, you can add redux-thunk and logger passing them as arguments to applyMiddleware():

    import { createStore, applyMiddleware } from 'redux'
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore)

How to set initial state in Redux?
    You need to pass initial state as second argument to createStore:

    const rootReducer = combineReducers({
        todos: todos,
        visibilityFilter: visibilityFilter
    })

    const initialState = {
        todos: [{ id: 123, name: 'example', completed: false }]
    }

    const store = createStore(
    rootReducer,
    initialState
    )

*/