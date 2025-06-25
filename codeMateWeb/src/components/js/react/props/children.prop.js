/*

What is children prop?

    - Children is a prop (this.props.children) that allows you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

    There are several methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.

    A simple usage of children prop looks as below,

    const MyDiv = React.createClass({
        render: function() {
            return <div>{this.props.children}</div>
        }
    })

    ReactDOM.render(
        <MyDiv>
            <span>{'Hello'}</span>
            <span>{'World'}</span>
        </MyDiv>,
    )

*/