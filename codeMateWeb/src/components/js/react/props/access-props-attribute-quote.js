/*

How do you access props in attribute quotes?

    React (or JSX) doesn't support variable interpolation inside an attribute value. The below representation won't work:
    <img className='image' src='images/{this.props.image}' />

    But you can put any JS expression inside curly braces as the entire attribute value. So the below expression works:
    <img className='image' src={'images/' + this.props.image} />

    Using template strings will also work:
    <img className='image' src={`images/${this.props.image}`} />

*/