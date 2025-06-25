/*

Can Redux only be used with React?
    Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.

Do you need to have a particular build tool to use Redux?
    Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all.

How Redux Form initialValues get updated from state?
    You need to add enableReinitialize : true setting.

    const InitializeFromStateForm = reduxForm({
    form: 'initializeFromState',
    enableReinitialize : true
    })(UserEdit)
    If your initialValues prop gets updated, your form will update too.

How React PropTypes allow different types for one prop?
    You can use oneOfType() method of PropTypes.

    For example, the height property can be defined with either string or number type as below:

    Component.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
    }

*/