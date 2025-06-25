/*

How to ensure hooks followed the rules in your project?
    React team released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. You can add this plugin to your project using the below command,
    npm install eslint-plugin-react-hooks@next
    And apply the below config in your ESLint config file,
    // Your ESLint configuration
    {
    "plugins": [
        // ...
        "react-hooks"
    ],
    "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error"
    }
    }
    Note: This plugin is intended to use in Create React App by default.

*/