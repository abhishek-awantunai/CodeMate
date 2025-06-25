/*

What are stateful components?

If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. These stateful components are always class components and have a state that gets initialized in the constructor.

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    // ...
  }
}
React 16.8 Update:

Hooks let you use state and other React features without writing classes.

The Equivalent Functional Component

 import React, {useState} from 'react';

 const App = (props) => {
   const [count, setCount] = useState(0);

   return (
     // JSX
   )
 }

*/