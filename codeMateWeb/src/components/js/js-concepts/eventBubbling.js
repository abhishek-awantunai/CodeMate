/**

Event Bubbling & Capturing / Trickling
    - These are two ways of event propagation in the DOM tree.

    - Basically in which sequence the event propagation will happen
    - In case of bubbling the event propagation moves up to the hierarchy and it goes directly till the end of DOM
    - Event Capturing is upwards down that is from top to bottom

*/


// A simple event handler associated with bubbling mechanism
document.getElementById('button').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
});


// A simple event handler associated with capturing mechanism
document.getElementById('button').addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
}, true);