/*

What is React Fiber?
    Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

What is the main goal of React Fiber?
    The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

    from documentation

    Its main goals are:

    Ability to split interruptible work in chunks.
    Ability to prioritize, rebase and reuse work in progress.
    Ability to yield back and forth between parents and children to support layout in React.
    Ability to return multiple elements from render().
    Better support for error boundaries.


*/