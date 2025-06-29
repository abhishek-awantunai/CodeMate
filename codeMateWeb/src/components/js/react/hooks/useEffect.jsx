/*

The useEffect hook is used for performing side effects in our React components.

Side effects are operations that are performed with the "outside world" or something that exists outside the context of our React app.

Some examples of side effects include making a GET or POST request to an external API endpoint or working with a browser API like window.navigator or document.getElementById().

We cannot perform operations like these directly within the body of our React component. useEffect gives us a function within which to perform side effects and a dependencies array which lists any external values that the function relies upon.

If any value within the dependencies array changes, the effect function runs again.

*/