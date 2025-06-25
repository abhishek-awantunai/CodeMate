/* 

Why should component names start with capital letter?
    If you are rendering your component using JSX, the name of that component has to begin with a capital letter otherwise React will throw an error as an unrecognized tag. This convention is because only HTML elements and SVG tags can begin with a lowercase letter.

    class SomeComponent extends Component {
        // Code goes here
    }
    You can define component class which name starts with lowercase letter, but when it's imported it should have capital letter. Here lowercase is fine:

    class myComponent extends Component {
        render() {
            return <div />
        }
    }

    export default myComponent
    While when imported in another file it should start with capital letter:

    import MyComponent from './MyComponent'
    
    What are the exceptions on React component naming?
    The component names should start with an uppercase letter but there are few exceptions to this convention. The lowercase tag names with a dot (property accessors) are still considered as valid component names. For example, the below tag can be compiled to a valid component,

        render() {
            return (
                <obj.component/> // `React.createElement(obj.component)`
            )
        }

*/