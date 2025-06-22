/*

What is redux-saga?
    redux-saga is a library that aims to make side effects (asynchronous things like data fetching and impure things like accessing the browser cache) in React/Redux applications easier and better.
    It is available in NPM:
    $ npm install --save redux-saga


What is the mental model of redux-saga?
    Saga is like a separate thread in your application, that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.

What are the differences between call() and put() in redux-saga?
    Both call() and put() are effect creator functions. call() function is used to create effect description, which instructs middleware to call the promise. put() function creates an effect, which instructs middleware to dispatch an action to the store.

    Let's take example of how these effects work for fetching particular user data.

    function* fetchUserSaga(action) {
        // `call` function accepts rest arguments, which will be passed to `api.fetchUser` function.
        // Instructing middleware to call promise, it resolved value will be assigned to `userData` variable
        const userData = yield call(api.fetchUser, action.userId)

        // Instructing middleware to dispatch corresponding action.
        yield put({
            type: 'FETCH_USER_SUCCESS',
            userData
        })
    }

*/