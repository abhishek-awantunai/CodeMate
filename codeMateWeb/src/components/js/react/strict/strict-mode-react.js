/*

What is strict mode in React?
    React.StrictMode is a useful component for highlighting potential problems in an application. Just like <Fragment>, <StrictMode> does not render any extra DOM elements. It activates additional checks and warnings for its descendants. These checks apply for development mode only.

    import React from 'react'

    function ExampleApplication() {
        return (
            <div>
            <Header />
            <React.StrictMode>
                <div>
                <ComponentOne />
                <ComponentTwo />
                </div>
            </React.StrictMode>
            <Header />
            </div>
        )
    }
    In the example above, the strict mode checks apply to <ComponentOne> and <ComponentTwo> components only.

*/