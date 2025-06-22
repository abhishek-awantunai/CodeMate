/*

https://github.com/sudheerj/angular-interview-questions#what-is-the-difference-between-angularjs-and-angular

1) Sort an array - insertion sort?
2) Search an element in an Array - linear / binary?
3) Diff between gulp, grunt, npm?
4) What is lexical scope?
5) What is prototype?
6) What is prototypal Inheritance ?
7) What is prototype chain?
8) How can we use one Object's properties in another object?
    - let obj1 = {
        name: 'foo',
    }
    let obj2 = {
        city: 'wonderland',
    }
    - we if we do obj1.__proto__ = obj2
    - then we can use obj1.city as well
9) What is scope, lexical scope, global scope?
10) What are closures?
11) What is event loop?

https://www.interviewbit.com/angular-interview-questions/

12) How does an Angular application work?
    - Angular app consists of a file named angular.json.
    - The builder looks at this file to find the entry point of the application
    - The main property of the options object defines the entry point of the application which in this case is main.ts.
    - The main.ts file creates a browser environment for the application to run, and, along with this, it also calls a 
    function called bootstrapModule, which bootstraps the application. 
    - platformBrowserDynamic().bootstrapModule(AppModule)
    - AppModule is getting bootstrapped
    - AppComponent is getting bootstrapped
    - Angular calls the index.html file
    - The HTML template of the root component is displayed inside the <app-root> tags
13) What are some of the advantages of Angular over other frameworks?
    - Features that are provided out of the box - Angular provides a number of built-in features like,routing, state management, rxjs library and http services straight out of the box. This means that one does not need tolook for the above stated features separately.
    - Declarative UI - Angular uses HTML to render the UI of an application. HTML isa declarative language and is much easier to use than JavaScript
    - Long-term Google support
14) Explain Components, Modules and Services in Angular
15) What is AOT compilation? What are the advantages of AOT?
    - The advantages of using AOT compilation are:
    Since the application compiles before running inside the browser, the browser loads the executable code and renders the application immediately, which leads to faster rendering.
    In AOT compilation, the compiler sends the external HTML and CSS files along with the application, eliminating separate AJAX requests for those source files, which leads to fewer ajax requests.
    Developers can detect and handle errors during the building phase, which helps in minimizing errors.
    The AOT compiler adds HTML and templates into the JS files before they run inside the browser. Due to this, there are no extra HTML files to be read, which provide better security to the application.
16) What are lifecycle hooks in Angular? Explain a few lifecycle hooks
17) Explain string interpolation and property binding in Angular
18) How are Angular expressions different from JavaScript expressions?
19) How are observables different from promises?
    - The first difference is that an Observable is lazy whereas a Promise is eager.
20) Explain MVVM architecture
21) Explain the concept of Dependency Injection?
22) What is Dependency injection token?

https://www.simplilearn.com/tutorials/angular-tutorial/angular-interview-questions

23) How does one share data between components in Angular?
24) What are directives in Angular?
25) Angular by default, uses client-side rendering for its applications.
26) What are decorators in Angular? 
27) Mention some advantages of Angular.
28) What are Templates in Angular?
29) What are Annotations in Angular?
30) What are Directives in Angular?
31)  What are Pipes in Angular?
32) What is the PipeTransform interface?
33) What are Pure Pipes? 
34) What are Impure Pipes?
35) What is an ngModule?
36) What are filters in Angular? Name a few of them.
37) What is view encapsulation in Angular?
38) What do you understand by scope in Angular?
39) Explain the lifecycle hooks in Angular
40) Explain the lifecycle hooks in Angular
41) Explain the @Component Decorator
42) What are Template and Reactive forms?
43) What is Bootstrap? How is it embedded into Angular? 
44) What is Eager and Lazy loading? 
45) What type of DOM does Angular implement? 

https://www.javatpoint.com/top-angular-interview-questions

46) Is it possible to make an angular application to render on the server-side?
47) What are modules in angular and in JS and what's difference? 
48) What are string interpolation and property binding in Angular?
49) What are the different types of directives in Angular?
50) When do we use a directive in Angular?
51) What is lazy loading in Angular? Why is it used?
52) What is multicasting in Angular?
53) How do you categorize data binding types in Angular?
54) What is the key difference between a constructor and ngOnInit?
55) What is the purpose of AsyncPipe in Angular?
56) What do you understand by Angular MVVM architecture?
57) What are the key differences between a Component and a Directive in Angular?
59) What is the best way to perform Error handling in Angular?
59) What is HttpClient, and what are the advantages of it?

https://www.qfles.com/interview-question/angular-interview-questions

60) What do you understand by the RouterState?
61) What do you understand by the RouterLinkActive?
62) What are the different router events used in Angular Router?
63) What do you understand by RouterOutlet and RouterLink?
64) What do you understand by the router imports?
65) What is Angular CLI?
66) What is lazy loading in Angular?
67) What is the difference between an Annotation and a Decorator in Angular?
68) What are templates in Angular?
69) What do you understand by Angular expressions? How are Angular expressions different from JavaScript expressions?
70) What are the new options for 'providedIn' in Angular 9?
71) What are Component Harnesses in Angular 9?
72) What is Project Ivy in Angular 9?
73) Where you will store the token in cookies, session storage or local storage?
74) Explain the SPA (Single Page Application).
75) What is an Angular service worker?
76) What is an Angular service worker?
77) What is Transpiling in Angular?
78) How to update your angular applications to the latest version of angular?
79) How will you publish any angular library?
80) How will you create the library in Angular?
81) What is the HTTP interceptor?
82) Explain the lazy loading of feature modules.
83) Explain the feature module and types of feature modules.
84) What is Root Module in Angular?
85) Explain the route guards?
86) How does routing work in Angular?
87) What is the subscribe method in Angular?
88) What is RxJS library?
89) What is the provider in Angular?
90) How to make a service a singleton in Angular?
91) What are the different types of binding available?
91) What is the host view in Angular?
92) What is the difference between NgModules and JavaScript modules?
93) How is Angular different from AngularJs?

https://www.dotnettricks.com/learn/angular/top-20-angular-interview-questions-and-answers

94) What is a platform in Angular?
95) What is the transition function?
96) What are the constraints of metadata?
97) How to opt from inline and external template files?
98) How to specify the type of stylesheet using the command?
99) What are the advantages of the Angular Console?
100) What is the Angular Console?
101) What are the features of Angular CLI?

https://intellipaat.com/blog/interview-question/angular-interview-questions/

102) What is an Angular CLI?
103) How to update your app to Angular 7?
104) What are HttpInterceptors in Angular?
105) What is the difference between interpolated content and the content assigned to the innerHTML property of a DOM     element?
106) What is Angular Universal?
107) What are the differences between Angular expressions and JavaScript expressions?
108) What is server-side rendering in Angular?
109) What is the purpose of the common module in Angular?
110) What are the different types of compilers used in Angular?
111) What does subscribing mean in RxJS?
112) Describe Angular authentication and authorization.
113) Explain the MVVM architecture.
114) How change Detection works?
115) Enhance Angular Performance?
116) What are the differences between Component and Directive?
117) What is metadata?
118) What is change detection?
119) How change detection works?
120) How can you read full response?
121) What are observable creation functions?
122) How can I use SASS in angular project?
    - When you are creating your project with angular cli, you can use ng newcommand. It generates all your components with predefined sass files.
        ng new My_New_Project --style=sass
        But if you are changing your existing style in your project then use ng set command,
        ng set defaults.styleExt scss
123) How can I use interceptor for an entire application?
124) Is multiple interceptors supported in Angular?
125) What is DOM sanitizer?
126) How do you prevent automatic sanitization?
127) What is the difference between interpolated content and innerHTML?
128) What are the ways to trigger change detection in Angular?
129) What is lazy loading?
130) What is the purpose of differential loading in CLI
131) How do you pass headers for HTTP client?
132) How do you detect route change in Angular?
133) What is platform in Angular?
134) What is the purpose of common module?
135) What is zone?
136) What is the purpose of base href tag?
    - The routing application should add element to the index.html as the first child in the tag in order to indicate how to compose navigation URLs. If app folder is the application root then you can set the href value as below
        <base href="/">
137) What is the benefit of Automatic Inlining of Fonts?
    - During compile time, Angular CLI will download and inline the fonts that your application is using. This performance update speed up the first contentful paint(FCP) and this feature is enabled by default in apps built with version 11.
138) What is host property in css?
139) How to set ngFor and ngIf on the same element?
140) How do you optimize the performance of async validators?
    - Sync Validator
        - Are wo jisme apan log sidha sidha check krnte hai bina kisi asynchronous event ke like minlength, maxlength etc
    - Async Validator
        - are wo wale validators jisme apan log API hit krte hai fir data late hai backend se then we check
141) What are the state CSS classes provided by ngModel?
    
    Visited	          -> ng-touched	ng-untouched
    
    Value has changed -> ng-dirty	ng-pristine
    
    Value is valid    -> ng-valid	ng-invalid

142) What are the differences between reactive forms and template driven forms?
143) Is it mandatory to use injectable on every service class?
144) How do you configure injectors with providers at different levels?
145) How do you change the settings of zonejs?
146) What happens if browserModule used in feature module?
    If you do import BrowserModule into a lazy loaded feature module, Angular returns an error telling you to use CommonModule instead. Because BrowserModule’s providers are for the entire app so it should only be in the root module, not in feature module. Whereas Feature modules only need the common directives in CommonModule.
147) 
148) 
149) 
150) 
151) 
152) 
153) 
154) 
155) 
156) 
157) 
158)
159)
160) 
161) 
162) 
163) 
164) 
165) 
166) 
167) 
168)
169)
170) 
171) 
172) 
173) 
174) 
175) 
176) 
177) 
178)
179)
180)









*/