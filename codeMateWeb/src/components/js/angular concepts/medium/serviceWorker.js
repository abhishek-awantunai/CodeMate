/**

Service Worker :-
It is a client side programmable proxy between you web app and outside world.It gives fine control of network requests.

We  can control the caching behavior of the request for your sites HTML and treat then differently.

SW also enables us to handle push messaging.
Sw are a type of web workers i.e an Object that executes a script separately from the main browser thread.
SW work run independent of the Application they are associated with and can receive messages when not active either because our Application is in background or not open or is closed

The primary usage of SW are to act as a caching agent, to handle network requests and to store content for offline use and to handle push messaging.

Making a web app work offline or have an amazing performance on slow networks.

A service worker is a javascript file that is run by the browser in the background separate from the webpage and handles events fired either by the browser or webpage and since it runs in background it does not need the webpage to be open and it does not show any markup and where it really shines is the events that it can listen for.

One of which is the ability to handle fetch events, intercepting and responding to the network requests.
This puts service workers virtually between the network and the browser allowing the service worker to provide content even when offline.

And since sw can listen to an event even when the page isn't open they can respond to push messages sent from the server to the browser.

Web workers are a background thread in web browsers that we can program

SW are based on web workers but are different from that.

Sw are more related to caching i.e they act like a proxy between your page and the request to the server.So that we can influence cache thing, set up online behavior.

PWA :-

Progressive Web Applications

*/



