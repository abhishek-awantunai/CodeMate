/*

Why are String Refs legacy?
    
    - If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like ref={'textInput'}, and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have below issues, and are considered legacy. String refs were removed in React v16.

    They force React to keep track of currently executing component. This is problematic because it makes react module stateful, and thus causes weird errors when react module is duplicated in the bundle.
    They are not composable — if a library puts a ref on the passed child, the user can't put another ref on it. Callback refs are perfectly composable.
    They don't work with static analysis like Flow. Flow can't guess the magic that framework does to make the string ref appear on this.refs, as well as its type (which could be different). Callback refs are friendlier to static analysis.
    It doesn't work as most people would expect with the "render callback" pattern (e.g. )
    
    class MyComponent extends Component {
        renderRow = (index) => {
            // This won't work. Ref will get attached to DataTable rather than MyComponent:
            return <input ref={'input-' + index} />;

            // This would work though! Callback refs are awesome.
            return <input ref={input => this['input-' + index] = input} />;
        }

        render() {
            return <DataTable data={this.props.data} renderRow={this.renderRow} />
        }
    }

*/