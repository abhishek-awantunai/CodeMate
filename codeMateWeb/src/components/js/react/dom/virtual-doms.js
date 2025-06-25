/*

    - DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.

    - React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects

    The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.


How Virtual DOM works?
    The Virtual DOM works in three simple steps. :- 
        - Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
        - Then the difference between the previous DOM representation and the new one is calculated.
        - Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

*/