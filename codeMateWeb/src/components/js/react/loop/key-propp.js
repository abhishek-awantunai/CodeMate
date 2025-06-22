/*

What is "key" prop and what is the benefit of using it in arrays of elements?

A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

Most often we use ID from our data as key:

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort:

const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
)
Note:

Using indexes for keys is not recommended if the order of items may change. This can negatively impact performance and may cause issues with component state.
If you extract list item as separate component then apply keys on list component instead of li tag.
There will be a warning message in the console if the key prop is not present on list items.

*/