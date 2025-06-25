/*

What are the possible ways of updating objects in state?
    
    Calling setState() with an object to merge with state:

    Using Object.assign() to create a copy of the object :-
        const user = Object.assign({}, this.state.user, { age: 42 })
        this.setState({ user })

    Using spread operator :-
        const user = { ...this.state.user, age: 42 }
        this.setState({ user })
    
    Calling setState() with a function :-
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                age: 42
            }
        }))

*/