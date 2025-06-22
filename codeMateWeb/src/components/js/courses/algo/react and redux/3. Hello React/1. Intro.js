/** 

    Video 1:- Section intro
    Video 2:- Setting up live server
        - Install live server gobally using yarn or npm
            - npm i -g live-server
            - yarn add global live-server
        - You can check installation by 
            - live-server -v
        - You can start live server by using 
            - live-server $folderName
                - eg:- 
                    - live-server public
    Video 3:- Hello React
        - We can standalone add react just like jquery on a page and make that page to support react.
        - We just need to add this react core script before body ends.
            - i.e <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
        - We also need to add react dom script as we want to run react in browser. Based on platform type we can switch between react-dom, react-native etc.
            - i.e <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
        -  Finally we can add our script to add our custom js code which uses react code. 
        - JSX - It's full form is JavaScript XML. It is a Javascript Syntax Extension just like SASS or LESS or SCSS for CSS. It's not part of core javascript language.
        - And we can use BABEL to convert this JSX or JS next generation features (i.e arrow function or spread operator etc) to support most of the browsers even IE.It can be used to make JS cross browser supportable.
    Video 4:- Setting up Babel 
        - Normally Babel converts next generation JS features to older version JS.But in order to convert JSX to older version normal JS we must use a preset or babel plugin.So we will be using react preset for this purpose.
        - We can globally add babel-cli globally using
            - npm i -g babel-cli 
        - Now we can use babel command to convert a JS file with JSX or next generation JS to older browser supported JS.
            - babel ./src/source.js --out-file=./public/final.js --presets=env,react
        - Locally we should add babel-preset-react ( for JSX support ) & babel-preset-env ( for JS next gen features support )
        - 

*/