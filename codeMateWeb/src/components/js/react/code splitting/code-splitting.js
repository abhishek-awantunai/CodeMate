/*

What is code-splitting?
    Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature.

    For example, in the below code snippets, it will make moduleA.js and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button. moduleA.js

    const moduleA = 'Hello';

    export { moduleA };
    App.js

    import React, { Component } from 'react';

    class App extends Component {
    handleClick = () => {
        import('./moduleA')
        .then(({ moduleA }) => {
            // Use moduleA
        })
        .catch(err => {
            // Handle failure
        });
    };

    render() {
        return (
        <div>
            <button onClick={this.handleClick}>Load</button>
        </div>
        );
    }
    }

    export default App

What is route based code splitting?
    One of the best place to do code splitting is with routes. The entire page is going to re-render at once so users are unlikely to interact with other elements in the page at the same time. Due to this, the user experience won't be disturbed.

    Let us take an example of route based website using libraries like React Router with React.lazy,

    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import React, { Suspense, lazy } from 'react';

    const Home = lazy(() => import('./routes/Home'));
    const About = lazy(() => import('./routes/About'));

    const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
        </Suspense>
    </Router>
    );
    In the above code, the code splitting will happen at each route level.

*/