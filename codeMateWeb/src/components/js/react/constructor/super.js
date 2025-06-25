/*
What is the purpose of using super constructor with props argument?

    A child class constructor cannot make use of this reference until the super() method has been called. The same applies to ES6 sub-classes as well. The main reason for passing props parameter to super() call is to access this.props in your child constructors.

    Passing props:

    class MyComponent extends React.Component {
        constructor(props) {
            super(props)

            console.log(this.props) // prints { name: 'John', age: 42 }
        }
    }
    Not passing props:

    class MyComponent extends React.Component {
        constructor(props) {
            super()

            console.log(this.props) // prints undefined

            // but props parameter is still available
            console.log(props) // prints { name: 'John', age: 42 }
        }

        render() {
            // no difference outside constructor
            console.log(this.props) // prints { name: 'John', age: 42 }
        }
    }
    The above code snippets reveals that this.props is different only within the constructor. It would be the same outside the constructor.

What is the difference between super() and super(props) in React using ES6 classes?
    When you want to access this.props in constructor() then you should pass props to super() method.

    Using super(props) :-
        class MyComponent extends React.Component {
            constructor(props) {
                super(props)
                console.log(this.props) // { name: 'John', ... }
            }
        }
    
    Using super():
        class MyComponent extends React.Component {
            constructor(props) {
                super()
                console.log(this.props) // undefined
            }
        }

    Outside constructor() both will display same value for this.props

*/