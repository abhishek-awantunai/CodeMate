/*

Can I import an SVG file as react component?
    You can import SVG directly as component instead of loading it as a file. This feature is available with react-scripts@2.0.0 and higher.

    import { ReactComponent as Logo } from './logo.svg'

    const App = () => (
    <div>
        { Logo is an actual react component }
        <Logo />
    </div>
    )
    Note: Don't forget about the curly braces in the import.

Why are inline ref callbacks or functions not recommended?
    If the ref callback is defined as an inline function, it will get called twice during updates, first with null and then again with the DOM element. This is because a new instance of the function is created with each render, so React needs to clear the old ref and set up the new one.

    class UserForm extends Component {
    handleSubmit = () => {
        console.log("Input Value is: ", this.input.value)
    }


    render () {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            ref={(input) => this.input = input} /> // Access DOM input in handle submit
        <button type='submit'>Submit</button>
        </form>
    )
    }
    }
    But our expectation is for the ref callback to get called once, when the component mounts. One quick fix is to use the ES7 class property syntax to define the function

    class UserForm extends Component {
    handleSubmit = () => {
    console.log("Input Value is: ", this.input.value)
    }

    setSearchInput = (input) => {
    this.input = input
    }

    render () {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
            type='text'
            ref={this.setSearchInput} /> // Access DOM input in handle submit
        <button type='submit'>Submit</button>
        </form>
    )
    }
    }
    **Note:** In React v16.3,

*/