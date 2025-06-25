/*

How to update a component every second?
    You need to use setInterval() to trigger the change, but you also need to clear the timer when the component unmounts to prevent errors and memory leaks.

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

*/