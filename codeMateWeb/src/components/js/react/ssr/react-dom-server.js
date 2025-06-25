/*

What is ReactDOMServer

    - The ReactDOMServer object enables you to render components to static markup (typically used on node server). This object is mainly used for server-side rendering (SSR). The following methods can be used in both the server and browser environments:

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