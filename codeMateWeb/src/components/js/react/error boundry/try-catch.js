/*

What is the difference between try catch block and error boundaries?
    Try catch block works with imperative code whereas error boundaries are meant for declarative code to render on the screen.

    For example, the try catch block used for below imperative code

    try {
    showButton();
    } catch (error) {
    // ...
    }
    Whereas error boundaries wrap declarative code as below,

    <ErrorBoundary>
    <MyComponent />
    </ErrorBoundary>
    So if an error occurs in a componentDidUpdate method caused by a setState somewhere deep in the tree, it will still correctly propagate to the closest error boundary.

What is the behavior of uncaught errors in react 16?
    In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing.

What is the proper placement for error boundaries?
    The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches,
        - You can wrap top-level route components to display a generic error message for the entire application.
        - You can also wrap individual components in an error boundary to protect them from crashing the rest of the application.

What are the methods invoked during error handling?
    Below methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

    static getDerivedStateFromError()
    componentDidCatch()

*/