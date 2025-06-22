/*

What is dynamic import?
    You can achieve code-splitting in your app using dynamic import.

    Let's take an example of addition,

    Normal Import
    import { add } from './math';
    console.log(add(10, 20));
    Dynamic Import
    import("./math").then(math => {
    console.log(math.add(10, 20));
    });

What are loadable components?
    If you want to do code-splitting in a server rendered app, it is recommend to use Loadable Components because React.lazy and Suspense is not yet available for server-side rendering. Loadable lets you render a dynamic import as a regular component.

    Lets take an example,

    import loadable from '@loadable/component'

    const OtherComponent = loadable(() => import('./OtherComponent'))

    function MyComponent() {
    return (
        <div>
        <OtherComponent />
        </div>
    )
    }
    Now OtherComponent will be loaded in a separated bundle

*/