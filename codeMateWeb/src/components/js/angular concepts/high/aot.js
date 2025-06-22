/**

https://www.youtube.com/watch?v=dM04T2-dfhU


An angular application consists of components and templates which a browser cannot understand. Therefore, every Angular application needs to be compiled before running inside the browser. The Angular compiler takes in the TS code, compiles it, and then produces some JS code. 

There are two kinds of compilation that Angular provides:

JIT(Just-in-Time) compilation: the application compiles inside the browser during runtime
ng build and ng serve

In JIT the application code along with the angular compiler is downloaded by the browser and at runtime when a request is issues to the application the JIT compiler in the browser compiles the application code before it is executed.


AOT(Ahead-of-Time) compilation: the application compiles during the build time.
ng build prod ng serve --aot

With AOT we will get the template binding error at build time like misspelling of bind variable and all

For Jit compilation the browser needs to download the angular compiler whereas for AOT compilation it does not have to.

Advantages of AOT compilation:

Fast Rendering: The browser loads the executable code and renders it immediately as the application is compiled before running inside the browser.
Fewer Ajax Requests: The compiler sends the external HTML and CSS files along with the application, eliminating AJAX requests for those source files.
Minimizing Errors: Easy to detect and handle errors during the building phase.
Better Security: Before an application runs inside the browser, the AOT compiler adds HTML and templates into the JS files, so there are no extra HTML files to be read, thus providing better security for the application.

JIT - Compiler is sent to browser so that angular things can be compiled like string interpolation, template binding

*/