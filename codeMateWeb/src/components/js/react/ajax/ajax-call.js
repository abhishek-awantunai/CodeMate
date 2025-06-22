/*

How to make AJAX call and in which component lifecycle methods should I make an AJAX call?
    You can use AJAX libraries such as Axios, jQuery AJAX, and the browser built-in fetch. You should fetch data in the componentDidMount() lifecycle method. This is so you can use setState() to update your component when the data is retrieved.

    For example, the employees list fetched from API and set local state:

    class MyComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                employees: [],
                error: null
            }
        }

        componentDidMount() {
            fetch('https://api.example.com/items')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        employees: result.employees
                    })
                },
                (error) => {
                    this.setState({ error })
                }
            )
        }

        render() {
            const { error, employees } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else {
                return (
                    <ul>
                        {employees.map(employee => (
                            <li key={employee.name}>
                            {employee.name}-{employee.experience}
                            </li>
                        ))}
                    </ul>
                )
            }
        }
    }

    For Functional Components

    import React, { Fragment, useEffect, useState } from 'react';
    import styled from 'styled-components';
    import axios from 'axios';

    const Ul = styled.ul`
        margin: 0px;
        padding: 0px;
        list-style-type: none;
    `
        
        const Li = styled.li`
        text-align: left;
        margin: 0px;
        padding: 7px 20px;
        line-height: 20px;
    `

    const Ajax = () => {
        const [posts, setPost] = useState([]);

        useEffect(() => {
            getListOfPosts();
        }, []);
        
        const getListOfPosts = async () => {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPost(data.data);
        }

        return (
            <Fragment>
                <h1>Ajax Component</h1>
                <Ul>
                    { posts && posts.map(post => {
                        return ( <Li key={post.id}>{ post.title }</Li> )
                    }) }
                </Ul>
            </Fragment>
        )
    }

    export default Ajax;

*/