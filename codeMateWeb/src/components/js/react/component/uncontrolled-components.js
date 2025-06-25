/*

What are uncontrolled components?
    The Uncontrolled Components are the ones that store their own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

    In the below UserProfile component, the name input is accessed using ref.

    class UserProfile extends React.Component {
        constructor(props) {
            super(props)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.input = React.createRef()
        }

        handleSubmit(event) {
            alert('A name was submitted: ' + this.input.current.value)
            event.preventDefault()
        }

        render() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                    {'Name:'}
                    <input type="text" ref={this.input} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            );
        }
    }
    In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

How do you set default value for uncontrolled component?
    In React, the value attribute on form elements will override the value in the DOM. With an uncontrolled component, you might want React to specify the initial value, but leave subsequent updates uncontrolled. To handle this case, you can specify a defaultValue attribute instead of value.

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
            User Name:
            <input
            defaultValue="John"
            type="text"
            ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
        </form>
    );
    }
    The same applies for select and textArea inputs. But you need to use defaultChecked for checkbox and radio inputs.

*/