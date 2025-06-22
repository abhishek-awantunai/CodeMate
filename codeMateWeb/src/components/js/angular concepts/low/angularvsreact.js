/*

  So, understanding Angular isn’t definitely an easy task, there’s a lot to learn, but in the end you’ll have a strong structure for your app: this is where Angular really shines, complex enterprise applications. It must be absolutely clear in your mind that you don’t need Angular for a simple website

  Angular has its own template engine which is nice, and keeps HTML separated from JavaScript. This could be particularly appreciated by some developers who don’t like mixing them together, and THIS could be one of the selling points of Angular over React, but it’s a matter of preferences, it could be vice versa.

  On the other side, React uses JSX which is basically a declarative way to put HTML into JavaScript: for me, that’s awesome. JSX is what keeps React’s components easy to understand and easy to work with. JSX is all about expression AND flexibility. Did someone say “dynamic component instantiation”? That’s where React is so much powerful over Angular, where dynamic instantiation is definitely more verbous (may it change in the future, it’d be awesome).

  Redux is the most famous library for handling application state in JavaScript projects

  It surely helps you keeping your React application well structured and organized (if used properly), but I feel someone is missing the point here: you should be inspired by this tools, don’t be afraid of them! And also, don’t think you can’t live without them. Redux is not essential for a good React application. On the other side, if you fall in love with the Redux way of doing things, there’s no reason for not using it in Angular, too! A well structured application is well structured with or without Redux, and this is true for both Angular and React.

  React’s ecosystem is a lot of libraries and Angular is quite new out there, as it changed completely from the old AngularJS. Looking at popularity doesn’t tells us anything about the project itself, and you won’t decide which framework will solve your problems by looking at a number. However, apart from popularity, React is definitely the most mature nowadays. It’s been around for a while and Facebook is really doing a good job with it. There are far more UI Kits available out there, Server Side Rendering just works (Angular Universal is still really unstable, unfortunately) and React Native is probably the best tool for cross-platform mobile applications out there (sorry, NativeScript!)

  On the other side, the Angular Team is really doing a great job with it, but it’ll take time to reach React’s level of maturity. I think it’s just a matter of time


  The Virtual DOM is an abstraction, React under the hood builds a logic tree which represents the actual DOM structure. In other words, you have a sort of “copy” of your DOM in memory, and… well, it consumes memory. But Virtual DOM is all about doing the right things to update your application’s structure: React will figure out what to change after every event, it will modify the Virtual DOM and then it’ll do the fastest operations to adjust the real DOM accordingly. So Virtual DOM is both slower and faster at the same time, depending on your application structure. In general, React is really fast

  Angular doesn’t have Virtual DOM, it uses its own mechanism for Change Detection combined with Zones, which helps Angular going through the Change Detection tree from its root to its leaves.

  Don’t be afraid of performance: they’re both fast enough!

*/