/*


List down some of the methods in a react-dom package

    Important methods for react-dom packages are:

        render()
        hydrate()
        createPortal()
        unmountComponentAtNode()
        findDOMNode()

- What is the use of react-dom package?
    
    The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    render()
    hydrate()
    unmountComponentAtNode()
    findDOMNode()
    createPortal()

What is the purpose of render method of react-dom?
This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

ReactDOM.render(element, container[, callback])
If the optional callback is provided, it will be executed after the component is rendered or updated.

What is ReactDOMServer?The ReactDOMServer object enables you to render components to static markup (typically used on node server). This object is mainly used for server-side rendering (SSR). The following methods can be used in both the server and browser environments:

renderToString()
renderToStaticMarkup()
For example, you generally run a Node-based web server like Express, Hapi, or Koa, and you call renderToString to render your root component to a string, which you then send as response.

// using Express
import { renderToString } from 'react-dom/server'
import MyPage from './MyPage'

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html><html><head><title>My Page</title></head><body>')
  res.write('<div id="content">')
  res.write(renderToString(<MyPage/>))
  res.write('</div></body></html>')
  res.end()
})




*/