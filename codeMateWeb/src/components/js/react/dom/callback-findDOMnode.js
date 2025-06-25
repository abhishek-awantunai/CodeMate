/*
Which is preferred option with in callback refs and findDOMNode()?
    It is preferred to use callback refs over findDOMNode() API. Because findDOMNode() prevents certain improvements in React in the future.

    The legacy approach of using findDOMNode:

    class MyComponent extends Component {
        componentDidMount() {
            findDOMNode(this).scrollIntoView()
        }

        render() {
            return <div />
        }
    }
    The recommended approach is:

    class MyComponent extends Component {
        constructor(props){
            super(props);
            this.node = createRef();
        }
        componentDidMount() {
            this.node.current.scrollIntoView();
        }

        render() {
            return <div ref={this.node} />
        }
    }
*/