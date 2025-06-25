/*

How would you go about investigating slow React application rendering?

One of the most common issues in React applications is when components re-render unnecessarily. There are two tools provided by React that are helpful in these situations:

React.memo(): This prevents unnecessary re-rendering of function components
PureComponent: This prevents unnecessary re-rendering of class components
Both of these tools rely on a shallow comparison of the props passed into the component—if the props have not changed, then the component will not re-render. While both tools are very useful, the shallow comparison brings with it an additional performance penalty, so both can have a negative performance impact if used incorrectly. By using the React Profiler, performance can be measured before and after using these tools to ensure that performance is actually improved by making a given change.

*/