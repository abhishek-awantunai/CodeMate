/*

What is diffing algorithm?
    Diffing is a heuristic algorithm based on two assumptions: Two elements of different types will produce different trees. The developer can hint at what elements will remain stable across renders with a key prop. (This is why React is always warning us to include keys in our props).

    React uses a heuristic algorithm called the Diffing algorithm for reconciliation based on these assumptions: Elements of different types will produce different trees. We can set which elements are static and do not need to be checked

    React needs to use algorithms to find out how to efficiently update the UI to match the most recent tree. The diffing algorithms is generating the minimum number of operations to transform one tree into another. However, the algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

    In this case, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

    Two elements of different types will produce different trees.
    The developer can hint at which child elements may be stable across different renders with a key prop.

What are the rules covered by diffing algorithm?
    When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. It covers the below rules during reconciliation algorithm,

    Elements Of Different Types: Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. For example, elements to , or from to of different types lead a full rebuild.
    DOM Elements Of The Same Type: When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes. Lets take an example with same DOM elements except className attribute,
    <div className="show" title="ReactJS" />

    <div className="hide" title="ReactJS" />
    Component Elements Of The Same Type: When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls componentWillReceiveProps() and componentWillUpdate() on the underlying instance. After that, the render() method is called and the diff algorithm recurses on the previous result and the new result.
    Recursing On Children: when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference. For example, when adding an element at the end of the children, converting between these two trees works well.
    <ul>
    <li>first</li>
    <li>second</li>
    </ul>

    <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
    </ul>
    Handling keys: React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key can make the tree conversion efficient,
    <ul>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
    </ul>

    <ul>
    <li key="2014">Connecticut</li>
    <li key="2015">Duke</li>
    <li key="2016">Villanova</li>
    </ul>

*/