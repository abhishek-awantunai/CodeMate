/*

How to programmatically trigger click event in React?

    You could use the ref prop to acquire a reference to the underlying HTMLInputElement object through a callback, store the reference as a class property, then use that reference to later trigger a click from your event handlers using the HTMLElement.click method.

    This can be done in two steps:

    Create ref in render method:

    <input ref={input => this.inputElement = input} />
    Apply click event in your event handler:

    this.inputElement.click()

*/