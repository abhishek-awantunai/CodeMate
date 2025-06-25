/*

What is Concurrent Rendering?
    The Concurrent rendering makes React apps to be more responsive by rendering component trees without blocking the main UI thread. It allows React to interrupt a long-running render to handle a high-priority event. i.e, When you enabled concurrent Mode, React will keep an eye on other tasks that need to be done, and if there's something with a higher priority it will pause what it is currently rendering and let the other task finish first. You can enable this in two ways,

    // 1. Part of an app by wrapping with ConcurrentMode
    <React.unstable_ConcurrentMode>
    <Something />
    </React.unstable_ConcurrentMode>

    // 2. Whole app using createRoot
    ReactDOM.unstable_createRoot(domNode).render(<App />);

What is the difference between async mode and concurrent mode?
    Both refers the same thing. Previously concurrent Mode being referred to as "Async Mode" by React team. The name has been changed to highlight React’s ability to perform work on different priority levels. So it avoids the confusion from other approaches to Async Rendering.

Can I use javascript urls in react16.9?
    Yes, you can use javascript: URLs but it will log a warning in the console. Because URLs starting with javascript: are dangerous by including unsanitized output in a tag like <a href> and create a security hole.

    const companyProfile = {
        website: "javascript: alert('Your website is hacked')",
    };
    // It will log a warning
    <a href={companyProfile.website}>More details</a>
    Remember that the future versions will throw an error for javascript URLs.

What is the purpose of eslint plugin for hooks?
    The ESLint plugin enforces rules of Hooks to avoid bugs. It assumes that any function starting with ”use” and a capital letter right after it is a Hook. In particular, the rule enforces that,

    Calls to Hooks are either inside a PascalCase function (assumed to be a component) or another useSomething function (assumed to be a custom Hook).
    Hooks are called in the same order on every render.


*/