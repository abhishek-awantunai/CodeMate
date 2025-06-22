/*

What is the difference between mapStateToProps() and mapDispatchToProps()?
    mapStateToProps() is a utility which helps your component get updated state (which is updated by some other components):

    const mapStateToProps = (state) => {
        return {
            todos: getVisibleTodos(state.todos, state.visibilityFilter)
        }
    }

    mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state):

    const mapDispatchToProps = (dispatch) => {
        return {
            onTodoClick: (id) => {
            dispatch(toggleTodo(id))
            }
        }
    }
    
    It is recommended to always use the “object shorthand” form for the mapDispatchToProps.

    Redux wraps it in another function that looks like (…args) => dispatch(onTodoClick(…args)), and pass that wrapper function as a prop to your component.

    const mapDispatchToProps = ({
        onTodoClick
    })

Can I dispatch an action in reducer?
    - Dispatching an action within a reducer is an anti-pattern. Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

How to access Redux store outside a component?
    You just need to export the store from the module where it created with createStore(). Also, it shouldn't pollute the global window object.

    store = createStore(myReducer)

    export default store

*/