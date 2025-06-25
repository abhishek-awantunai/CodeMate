/*

What are the different ways to write mapDispatchToProps()?
    There are a few ways of binding action creators to dispatch() in mapDispatchToProps().

    Below are the possible options:

    const mapDispatchToProps = (dispatch) => ({
    action: () => dispatch(action())
    })
    const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(action, dispatch)
    })
    const mapDispatchToProps = { action }
    The third option is just a shorthand for the first one.

*/