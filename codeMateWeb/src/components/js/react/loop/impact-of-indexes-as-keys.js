/*

What is the impact of indexes as keys?
    Keys should be stable, predictable, and unique so that React can keep track of elements.

    In the below code snippet each element's key will be based on ordering, rather than tied to the data that is being represented. This limits the optimizations that React can do.

    {
        todos.map((todo, index) =>
            <Todo {...todo} key={index} />
        )
    }

    If you use element data for unique key, assuming todo.id is unique to this list and stable, React would be able to reorder elements without needing to reevaluate them as much.

    {
        todos.map((todo) =>
            <Todo {...todo} key={todo.id} />
        )
    }

What are the conditions to safely use the index as a key?
    There are three conditions to make sure, it is safe use the index as a key.
        The list and items are static– they are not computed and do not change
        The items in the list have no ids
        The list is never reordered or filtered.

Should keys be globally unique?
    The keys used within arrays should be unique among their siblings but they don’t need to be globally unique. i.e, You can use the same keys with two different arrays.

    For example, the below Book component uses two arrays with different arrays,

    function Book(props) {
    const index = (
        <ul>
        {props.pages.map((page) =>
            <li key={page.id}>
            {page.title}
            </li>
        )}
        </ul>
    );
    const content = props.pages.map((page) =>
        <div key={page.id}>
        <h3>{page.title}</h3>
        <p>{page.content}</p>
        <p>{page.pageNumber}</p>
        </div>
    );
    return (
        <div>
        {index}
        <hr />
        {content}
        </div>
    );
    }

*/