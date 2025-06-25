/*

How to conditionally apply class attributes?
    You shouldn't use curly braces inside quotes because it is going to be evaluated as a string.

    <div className="btn-panel {this.props.visible ? 'show' : 'hidden'}">
    Instead you need to move curly braces outside (don't forget to include spaces between class names):

    <div className={'btn-panel ' + (this.props.visible ? 'show' : 'hidden')}>
    Template strings will also work:

    <div className={`btn-panel ${this.props.visible ? 'show' : 'hidden'}`}>

*/