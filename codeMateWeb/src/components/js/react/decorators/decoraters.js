/*

How you use decorators in React?
    You can decorate your class components, which is the same as passing the component into a function. Decorators are flexible and readable way of modifying component functionality.

    @setTitle('Profile')
    class Profile extends React.Component {
        //....
    }


    title is a string that will be set as a document title
    WrappedComponent is what our decorator will receive when
    put directly above a component class as seen in the example above

    const setTitle = (title) => (WrappedComponent) => {
        return class extends React.Component {
        componentDidMount() {
            document.title = title
        }
    
            render() {
                return <WrappedComponent {...this.props} />
            }
        }
    }
    Note: Decorators are a feature that didn't make it into ES7, but are currently a stage 2 proposal.

*/
