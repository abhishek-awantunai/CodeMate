/*

What is context?
    Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated users, locale preferences, UI themes need to be accessed in the application by many components.

    const {Provider, Consumer} = React.createContext(defaultValue)

Give an example on How to use context?
    Context is designed to share data that can be considered global for a tree of React components.

    For example, in the code below lets manually thread through a “theme” prop in order to style the Button component.

    //Lets create a context with a default theme value "luna"
    const ThemeContext = React.createContext('luna');
    // Create App component where it uses provider to pass theme value in the tree
    class App extends React.Component {
    render() {
        return (
        <ThemeContext.Provider value="nova">
            <Toolbar />
        </ThemeContext.Provider>
        );
    }
    }
    // A middle component where you don't need to pass theme prop anymore
    function Toolbar(props) {
    return (
        <div>
        <ThemedButton />
        </div>
    );
    }
    // Lets read theme value in the button component to use
    class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
    }

What is the purpose of default value in context?
    The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.

    Below code snippet provides default theme value as Luna.

    const MyContext = React.createContext(defaultValue);

How do you use contextType?
    ContextType is used to consume the context object. The contextType property can be used in two ways,

    contextType as property of class: The contextType property on a class can be assigned a Context object created by React.createContext(). After that, you can consume the nearest current value of that Context type using this.context in any of the lifecycle methods and render function.

    Lets assign contextType property on MyClass as below,

    class MyClass extends React.Component {
        componentDidMount() {
            let value = this.context;
            perform a side-effect at mount using the value of MyContext
        }
        componentDidUpdate() {
        let value = this.context;
            ...
        }
        componentWillUnmount() {
        let value = this.context;
            ...
        }
        render() {
        let value = this.context;
            render something based on the value of MyContext
        }
        }
        MyClass.contextType = MyContext;
        Static field You can use a static class field to initialize your contextType using public class field syntax.

        class MyClass extends React.Component {
        static contextType = MyContext;
        render() {
        let value = this.context;
            render something based on the value
        }
    }

*/