/*

Is it possible to use React without rendering HTML?
    It is possible with latest version (>=16.2). Below are the possible options:

    render() {
        return false
    }

    render() {
        return null
    }
    
    render() {
        return []
    }
    
    render() {
        return <React.Fragment></React.Fragment>
    }
    
    render() {
        return <></>
    }

    Returning undefined won't work.

*/