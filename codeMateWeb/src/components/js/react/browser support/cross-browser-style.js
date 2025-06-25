/*

How do you apply vendor prefixes to inline styles in React?
    React does not apply vendor prefixes automatically. You need to add vendor prefixes manually.

    <div style={{
        transform: 'rotate(90deg)',
        WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
        msTransform: 'rotate(90deg)' // 'ms' is the only lowercase vendor prefix
    }} />

*/