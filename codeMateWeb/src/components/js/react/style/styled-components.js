/*

What are Styled Components?
    styled-components is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript.

Give an example of Styled Components?
    Lets create <Title> and <Wrapper> components with specific styles for each.

    import React from 'react'
    import styled from 'styled-components'

    // Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    `

    // Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
    const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    `
    These two variables, Title and Wrapper, are now components that you can render just like any other react component.

    <Wrapper>
    <Title>{'Lets start first styled component!'}</Title>
    </Wrapper>

*/