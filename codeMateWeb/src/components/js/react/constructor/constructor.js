/*

What is the main purpose of constructor?
    The constructor is mainly used for two purposes,
        To initialize local state by assigning object to this.state
        For binding event handler methods to the instance For example, the below code covers both the above cases,
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

Is it mandatory to define constructor for React component?
    No, it is not mandatory. i.e, If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

*/