/*

Is lazy function supports named exports?

    - No, currently React.lazy function supports default exports only. If you would like to import modules which are named exports, you can create an intermediate module that reexports it as the default. It also ensures that tree shaking keeps working and don’t pull unused components. Let's take a component file which exports multiple named components,
    // MoreComponents.js
    export const SomeComponent = ...;
    export const UnusedComponent = ...;
    and reexport MoreComponents.js components in an intermediate file IntermediateComponent.js
    // IntermediateComponent.js
    export { SomeComponent as default } from "./MoreComponents.js";
    Now you can import the module using lazy function as below,
    import React, { lazy } from 'react';
    const SomeComponent = lazy(() => import("./IntermediateComponent.js"));

*/