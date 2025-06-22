/*

Does the statics object work with ES6 classes in React?
    No, statics only works with React.createClass():

    someComponent= React.createClass({
    statics: {
        someMethod: function() {
        // ..
        }
    }
    })
    But you can write statics inside ES6+ classes as below,

    class Component extends React.Component {
    static propTypes = {
        // ...
    }

    static someMethod() {
        // ...
    }
    }
    or writing them outside class as below,

    class Component extends React.Component {
    ....
    }

    Component.propTypes = {...}
    Component.someMethod = function(){....}

*/