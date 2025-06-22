/*

How can I make use of Error Boundaries in functional React components?

As of v16.2.0, there's no way to turn a functional component into an error boundary. The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

Also bear in mind that try/catch blocks won't work on all cases. If a component deep in the hierarchy tries to update and fails, the try/catch block in one of the parents won't work -- because it isn't necessarily updating together with the child.

A few third party packages on npm implement error boundary hooks.

Error boundaries help you to catch Javascript error anywhere in the child components. They are most used to log the error and show a fallback UI.

What are error boundaries in React v16?

Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError() :

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info)
  }

  static getDerivedStateFromError(error) {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{'Something went wrong.'}</h1>
    }
    return this.props.children
  }
}
After that use it as a regular component:

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>

*/