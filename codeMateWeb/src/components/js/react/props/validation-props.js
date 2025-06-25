/*

How to apply validation on props in React?
    When the application is running in development mode, React will automatically check all props that we set on components to make sure they have correct type. If the type is incorrect, React will generate warning messages in the console. It's disabled in production mode due to performance impact. The mandatory props are defined with isRequired.

    The set of predefined prop types:

    PropTypes.number
    PropTypes.string
    PropTypes.array
    PropTypes.object
    PropTypes.func
    PropTypes.node
    PropTypes.element
    PropTypes.bool
    PropTypes.symbol
    PropTypes.any
    We can define propTypes for User component as below:

    import React from 'react'
    import PropTypes from 'prop-types'

    class User extends React.Component {
        static propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }

        render() {
            return (
            <>
                <h1>{`Welcome, ${this.props.name}`}</h1>
                <h2>{`Age, ${this.props.age}`}</h2>
            </>
            )
        }
    }
    Note: In React v15.5 PropTypes were moved from React.PropTypes to prop-types library.

    The Equivalent Functional Component

    import React from 'react'
    import PropTypes from 'prop-types'

    function User({name, age}) {
    return (
        <>
        <h1>{`Welcome, ${name}`}</h1>
        <h2>{`Age, ${age}`}</h2>
        </>
    )
    }

    User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }
s
*/