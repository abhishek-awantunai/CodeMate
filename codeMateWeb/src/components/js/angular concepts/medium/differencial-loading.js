/*

From Angular8 release onwards, the applications are built using differential loading strategy from CLI to build two separate bundles as part of your deployed application.

    The first build contains ES2015 syntax which takes the advantage of built-in support in modern browsers, ships less polyfills, and results in a smaller bundle size.
    
    The second build contains old ES5 syntax to support older browsers with all necessary polyfills. But this results in a larger bundle size.
    
    Note: This strategy is used to support multiple browsers but it only load the code that the browser needs.
    And we need to configure it.

*/