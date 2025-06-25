/*

Source : -
    - Angular Compiler :-
        - https://www.youtube.com/watch?v=anphffaCZrQ
    - Angular Runtime
        - https://www.youtube.com/watch?v=S0o-4yc2n-8

- How application code and angular code work together
    - Broadly angular has two parts 
        - Angular Compiler
            - It is a build time utility that converts Typescript code to JavaScript and in addition to that it also parses your angular decorators in your templates into some code that runtime can understand.
        - Angular Runtime
            - It is the framework code that ships the application and actually runs the application in the browser


    - Angular Compiler
        - It downgrades the application's Typescript code to JavaScript and in addition to that it also parses your angular decorators in your templates into some code that runtime can understand.

        @angular/compiler / compiler -  does this work of conversion and generates instructions
        @angular/core / runtime - implements the generated instructions


    - When an application bootstraps there are basically three main phases that occurs :-
        - Module Setup
            - It is where the angular framework is instantiating the modules and setting up the module injectors
        - View Creation
            - It is where we are already creating the DOM for the entire application eg instantiating directives.
        - Change Detection
            - It is where we are checking the binding values and updating them if necessary



        - Module Bootstrap
            - Module Setup
        - Component Bootstrap
            - Vew Creation
            - Change Detection

    - Why do we have a compiler at all?
        - It takes the declarative angular syntax and converts them into the imperative code


    _ JIT :- 
        - It used to be development mode in angular
        - Plain Typescript transpiler is used here to convert Typescript to JavaScript 
        - It takes typescript code and is feeded to typescript transpiler and we get back javascript in return but with decorators associated with it so the decorators end up in the bundled JS code as an output from the typescript transpiler and it gets converted in browser during runtime.
        - And when in browser that decorators are called they need angular compiler to covert those declarative decorator syntax into imperative syntax. Hence compiler is shipped along in JIT mode as its needed during runtime. 

    - AOT :- 
        - Instead of Typescript transpiler angular compiler NGC is used.
        - NGC not only compiles the Typescript code into JavaScript but also converts declarative syntax i.e decorators into JavaScript imperative instructions for rendering in the browser.
        - So we don't need to do this in run time and we don't have to ship angular compiler.

    - Angular Compiler working in different aspects :-
        - Architecture
        - Compilation Model
        - Features of Compiler
        - Template type checking
        
*/