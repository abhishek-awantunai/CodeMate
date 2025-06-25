/*

How to loop inside JSX?
    You can simply use Array.prototype.map with ES6 arrow function syntax.

    For example, the items array of objects is mapped into an array of components:
        <tbody>
            {items.map(item => <SomeComponent key={item.id} name={item.name} />)}
        </tbody>
    
    But you can't iterate using for loop :-
        <tbody>
            for (let i = 0; i < items.length; i++) {
                <SomeComponent key={items[i].id} name={items[i].name} />
            }
        </tbody>

    This is because JSX tags are transpiled into function calls, and you can't use statements inside expressions. This may change thanks to do expressions which are stage 1 proposal.

*/