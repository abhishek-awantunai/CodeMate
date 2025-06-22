/*

What is the recommended ordering of methods in component class?
    Recommended ordering of methods from mounting to render stage:
        - static methods
        - constructor()
        - getChildContext()
        - componentWillMount()
        - componentDidMount()
        - componentWillReceiveProps()
        - shouldComponentUpdate()
        - componentWillUpdate()
        - componentDidUpdate()
        - componentWillUnmount()
        - click handlers or event handlers like onClickSubmit() or onChangeDescription()
        - getter methods for render like getSelectReason() or getFooterContent()
        - optional render methods like renderNavigation() or renderProfilePicture()
        - render()

*/