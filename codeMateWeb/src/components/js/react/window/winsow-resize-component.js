/*

How to re-render the view when the browser is resized?
    You can listen to the resize event in componentDidMount() and then update the dimensions (width and height). You should remove the listener in componentWillUnmount() method.

    class WindowDimensions extends React.Component {
        constructor(props){
            super(props);
            this.updateDimensions = this.updateDimensions.bind(this);
        }
        
        componentWillMount() {
            this.updateDimensions()
        }

        componentDidMount() {
            window.addEventListener('resize', this.updateDimensions)
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateDimensions)
        }

        updateDimensions() {
            this.setState({width: window.innerWidth, height: window.innerHeight})
        }

        render() {
            return <span>{this.state.width} x {this.state.height}</span>
        }
    }

*/