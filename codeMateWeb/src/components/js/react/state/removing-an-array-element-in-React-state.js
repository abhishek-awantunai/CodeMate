/*

What is the recommended approach of removing an array element in React state?
    The better approach is to use Array.prototype.filter() method.

    For example, let's create a removeItem() method for updating the state.

    removeItem(index) {
        this.setState({
            data: this.state.data.filter((item, i) => i !== index)
        })
    }

*/