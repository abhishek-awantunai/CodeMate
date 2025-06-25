/*

Why would you need to bind event handlers to this?

    Binding is not something that is specifc to React, but rather how this works in Javascript. When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. In JavaScript, class methods are not bound by default. If you forget to bind this.someEventHandler and pass it to onChange, this will be undefined when the function is actually called.
    Generally, if you refer to a method without () after it, such as onChange={this.someEventHandler}, you should bind that method.

*/