/*

What is MobX?
    MobX is a simple, scalable and battle tested state management solution for applying functional reactive programming (TFRP). For reactJs application, you need to install below packages,
    npm install mobx --save
    npm install mobx-react --save

What are the differences between Redux and MobX?
    Below are the main differences between Redux and MobX,

    Topic	Redux	MobX
    Definition	It is a javascript library for managing the application state	It is a library for reactively managing the state of your applications
    Programming	It is mainly written in ES6	It is written in JavaScript(ES5)
    Data Store	There is only one large store exist for data storage	There is more than one store for storage
    Usage	Mainly used for large and complex applications	Used for simple applications
    Performance	Need to be improved	Provides better performance
    How it stores	Uses JS Object to store	Uses observable to store the data

Should I learn ES6 before learning ReactJS?
    No, you don’t have to learn es2015/es6 to learn react. But you may find many resources or React ecosystem uses ES6 extensively. Let's see some of the frequently used ES6 features,

    Destructuring: To get props and use them in a component
    // in es 5
    var someData = this.props.someData
    var dispatch = this.props.dispatch

    // in es6
    const { someData, dispatch } = this.props
    Spread operator: Helps in passing props down into a component
    // in es 5
    <SomeComponent someData={this.props.someData} dispatch={this.props.dispatch} />

    // in es6
    <SomeComponent {...this.props} />
    Arrow functions: Makes compact syntax
    // es 5
    var users = usersList.map(function (user) {
    return <li>{user.name}</li>
    })
    // es 6
    const users = usersList.map(user => <li>{user.name}</li>);

*/