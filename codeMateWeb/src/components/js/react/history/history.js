/*

How to get history on React Router v4?
    Below are the list of steps to get history object on React Router v4,

    Create a module that exports a history object and import this module across the project.

    For example, create history.js file:

    import { createBrowserHistory } from 'history'

    export default createBrowserHistory({
        pass a configuration object here if needed
    })
    
    You should use the <Router> component instead of built-in routers. Import the above history.js inside index.js file:

    import { Router } from 'react-router-dom'
    import history from './history'
    import App from './App'

    ReactDOM.render((
    <Router history={history}>
        <App />
    </Router>
    ), holder)
    You can also use push method of history object similar to built-in history object:

    // some-other-file.js
    import history from './history'

    history.push('/go-here')

How to perform automatic redirect after login?
    The react-router package provides <Redirect> component in React Router. Rendering a <Redirect> will navigate to a new location. Like server-side redirects, the new location will override the current location in the history stack.

    import React, { Component } from 'react'
    import { Redirect } from 'react-router'

    export default class LoginComponent extends Component {
        render() {
            if (this.state.isLoggedIn === true) {
                return <Redirect to="/your/redirect/page" />
            } else {
                return <div>{'Login Please'}</div>
            }
        }
    }

*/