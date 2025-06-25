/*

How to focus an input element on page load?
    You can do it by creating ref for input element and using it in componentDidMount():

    class App extends React.Component{
        componentDidMount() {
            this.nameInput.focus()
        }

        render() {
            return (
            <div>
                <input
                defaultValue={'Won\'t focus'}
                />
                <input
                ref={(input) => this.nameInput = input}
                defaultValue={'Will focus'}
                />
            </div>
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById('app'))
    
    Also in Functional component (react 16.08 and above)

    import React, {useEffect, useRef} from 'react';

    const App = () => {
        const inputElRef = useRef(null)
        
        useEffect(()=>{
            inputElRef.current.focus()
        }, [])
        
        return(
            <div>
            <input
                defaultValue={'Won\'t focus'}
            />
            <input
                ref={inputElRef}
                defaultValue={'Will focus'}
            />
            </div>
        )
    }

    ReactDOM.render(<App />, document.getElementById('app'))

*/