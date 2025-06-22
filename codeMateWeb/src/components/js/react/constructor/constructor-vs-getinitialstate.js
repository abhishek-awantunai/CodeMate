/*

What is the difference between using constructor vs getInitialState in React?

    - The difference between constructor and getInitialState is the difference between ES6 and ES5 itself. You should initialize state in the constructor when using ES6 classes, and define the getInitialState method when using React.createClass.

    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = { initial state  };
        }
    }

    is equivalent to

    var MyComponent = React.createClass({
        getInitialState() {
            return { initial state };
        },
    });

*/