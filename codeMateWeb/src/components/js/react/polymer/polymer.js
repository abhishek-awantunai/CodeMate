/*

How to use Polymer in React?
    You need to follow below steps to use Polymer in React,

    Create a Polymer element:

    <link rel='import' href='../../bower_components/polymer/polymer.html' />
    Polymer({
    is: 'calender-element',
    ready: function() {
        this.textContent = 'I am a calender'
    }
    })
    Create the Polymer component HTML tag by importing it in a HTML document, e.g. import it in the index.html of your React application:

    <link rel='import' href='./src/polymer-components/calender-element.html'>
    Use that element in the JSX file:

    import React from 'react'

    class MyComponent extends React.Component {
    render() {
        return (
        <calender-element />
        )
    }
    }

    export default MyComponent

*/