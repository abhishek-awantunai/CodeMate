/**

Server Side Rendering.

You take your app and you think of it almost like pre-boot it up on the server.So you stamp out all the DOM nodes, you get everything kind of in place. You have your Css in place so it paints really fast.And you send it all down to the client and you get a really nice fast first paint because everything is just already there in the document.

It improves few metrics like first paint , first meaningful paint, first contentful paint, how quickly can a people get text on screen but it also costs you with shipping down a much larger HTML payload.

But at the same time it is good for web crawlers.

So it depends on the purpose.

*/