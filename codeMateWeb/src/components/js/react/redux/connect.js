/*

How to use connect() from React Redux?
    You need to follow two steps to use your store in your container:

    Use mapStateToProps(): It maps the state variables from your store to the props that you specify.

    Connect the above props to your container: The object returned by the mapStateToProps function is connected to the container. You can import connect() from react-redux.

    import React from 'react'
    import { connect } from 'react-redux'

    class App extends React.Component {
        render() {
            return <div>{this.props.containerData}</div>
        }
    }

    function mapStateToProps(state) {
        return { containerData: state.data }
    }

    export default connect(mapStateToProps)(App)

*/