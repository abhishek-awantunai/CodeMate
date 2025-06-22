/*

What is the difference between React context and React Redux?
    - You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.

    Whereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.

Why are Redux state functions called reducers?
    - Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could reduce a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.

How to make AJAX request in Redux?
    You can use redux-thunk middleware which allows you to define async actions.

    Let's take an example of fetching specific account as an AJAX call using fetch API:

    export function fetchAccount(id) {
        return dispatch => {
            dispatch(setLoadingAccountState()) // Show a loading spinner
            fetch(`/account/${id}`, (response) => {
            dispatch(doneFetchingAccount()) // Hide loading spinner
            if (response.status === 200) {
                dispatch(setAccount(response.json)) // Use a normal function to set the received state
            } else {
                dispatch(someError)
            }
            })
        }
    }

    function setAccount(data) {
        return { type: 'SET_Account', data: data }
    }

*/