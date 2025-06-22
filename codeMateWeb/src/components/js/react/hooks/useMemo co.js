/*

Explain why and when would you use useMemo()?

In the lifecycle of a component, React re-renders the component when an update is made. When React checks for any changes in a component, it may detect an unintended or unexpected change due to how JavaScript handles equality and shallow comparisons. This change in the React application will cause it to re-render unnecessarily.

Additionally, if that re-rendering is an expensive operation, like a long for loop, it can hurt performance. Expensive operations can be costly in either time, memory, or processing.

When:

Optimal if the wrapped function is large and expensive.

How:

Memoization is an optimization technique which passes a complex function to be memoized. In memoization, the result is “remembered” when the same parameters are passed-in subsequently.

const memoizedValue = React.useMemo(() => computeExpensiveValue(a, b), [a, b]);
useMemo takes in a function and an array of dependencies. The dependency’s list are the elements useMemo watches: if there are no changes, the function result will stay the same. Otherwise, it will re-run the function. If they don’t change, it doesn’t matter if our entire component re-renders, the function won’t re-run but instead return the stored result.

*/