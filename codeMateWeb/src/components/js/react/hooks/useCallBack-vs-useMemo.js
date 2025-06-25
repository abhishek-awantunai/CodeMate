/*

What's the difference between useCallback and useMemo in practice?

    The useCallback and useMemo hooks exist to improve our components' performance.

    useCallback is to prevent functions that are declared within the body of function components from being recreated on every render.

    This can lead to unnecessary performance issues, especially for callback functions that are passed down to child components.

    useMemo, on the other hand, memoizes an expensive operation that we give it.

    Memoization is a technical term for functions that are able to "remember" past values they have computed if their arguments have not changed. If so, the function returns the "remembered" value.

    In other words, we may have a calculation that takes a significant amount of computing resources and we want it to be performed as sparingly as possible.

    If that case, we use the useMemo hook, which differs from the useCallback hook in that it returns a value, not a function.

    With useCallback you memoize functions, useMemo memoizes any computed value:

    const fn = () => 42 // assuming expensive calculation here
    const memoFn = useCallback(fn, [dep]) // (1)
    const memoFnReturn = useMemo(fn, [dep]) // (2)
    (1) will return a memoized version of fn - same reference across multiple renders, as long as dep is the same. But every time you invoke memoFn, that complex computation starts again.

    (2) will invoke fn every time dep changes and remember its returned value (42 here), which is then stored in memoFnReturn.

*/