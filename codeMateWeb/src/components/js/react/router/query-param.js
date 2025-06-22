/*

How to get query parameters in React Router v4?
    The ability to parse query strings was taken out of React Router v4 because there have been user requests over the years to support different implementation. So the decision has been given to users to choose the implementation they like. The recommended approach is to use query strings library.

    const queryString = require('query-string');
    const parsed = queryString.parse(props.location.search);
    You can also use URLSearchParams if you want something native:

    const params = new URLSearchParams(props.location.search)
    const foo = params.get('name')
    You should use a polyfill for IE11.


Why you get "Router may have only one child element" warning?
    You have to wrap your Route's in a <Switch> block because <Switch> is unique in that it renders a route exclusively.

    At first you need to add Switch to your imports:

    import { Switch, Router, Route } from 'react-router'
    Then define the routes within <Switch> block:

    <Router>
    <Switch>
        <Route { ... } />
        <Route { ... } />
    </Switch>
    </Router>


How to pass params to history.push method in React Router v4?
    While navigating you can pass props to the history object:

    this.props.history.push({
        pathname: '/template',
        search: '?name=sudheer',
        state: { detail: response.data }
    })
    The search property is used to pass query params in push() method.

How to implement default or NotFound page?
    A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches. So you just need to simply drop path attribute as below

    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route component={NotFound} />
    </Switch>

*/