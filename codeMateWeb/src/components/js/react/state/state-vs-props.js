/*

What is the difference between state and props?

    Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. i.e,
    Props get passed to the component similar to function parameters
    State is managed within the component similar to variables declared within a function.

    Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

What is the purpose of using super constructor with props argument in React?
    - A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

    Passing props:

        class MyComponent extends React.Component {
            constructor(props) {
                super(props);
                console.log(this.props);  // Prints { name: 'sudheer',age: 30 }
            }
        }

    Not passing props:

        class MyComponent extends React.Component {
            constructor(props) {
                super();
                console.log(this.props); // Prints undefined
                // But Props parameter is still available
                console.log(props); // Prints { name: 'sudheer',age: 30 }
            }

            render() {
                // No difference outside constructor
                console.log(this.props) // Prints { name: 'sudheer',age: 30 }
            }
        }

    The above code snippets reveals that this.props behavior is different only with in the constructor. It would be same outside the constructor.

*/