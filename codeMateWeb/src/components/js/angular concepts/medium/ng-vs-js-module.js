/**

What are the differences between ngModule and javascript module?
    Below are the main differences between Angular NgModule and javascript module,

    NgModule vs JavaScript module
    NgModule bounds declarable classes only	There is no restriction classes
    List the module's classes in declarations array only	Can define all member classes in one giant file
    It only export the declarable classes it owns or imports from other modules	It can export any classes
    Extend the entire application with services by adding providers to provides array	Can't extend the application with services


What is the role of ngModule metadata in compilation process?
The @NgModule metadata is used to tell the Angular compiler what components to be compiled for this module and how to link this module with other modules.

What is Angular compiler?
    The Angular compiler is used to convert the application code into JavaScript code. It reads the template markup, combines it with the corresponding component class code, and emits component factories which creates JavaScript representation of the component along with elements of @Component metadata.

How does angular finds components, directives and pipes?
    The Angular compiler finds a component or directive in a template when it can match the selector of that component or directive in that template. Whereas it finds a pipe if the pipe's name appears within the pipe syntax of the template HTML.

Is it all components generated in production build?
    No, only the entry components and template components appears in production builds. If a component isn't an entry component and isn't found in a template, the tree shaker will throw it away. Due to this reason, make sure to add only true entry components to reduce the bundle size

*/