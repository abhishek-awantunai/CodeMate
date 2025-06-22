/*

What is reselect and how it works?
    Reselect is a selector library (for Redux) which uses memoization concept. It was originally written to compute derived data from Redux-like applications state, but it can't be tied to any architecture or library.

    Reselect keeps a copy of the last inputs/outputs of the last call, and recomputes the result only if one of the inputs changes. If the the same inputs are provided twice in a row, Reselect returns the cached output. It's memoization and cache are fully customizable.


What are the main features of Reselect library?
    Let's see the main features of Reselect library,

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
    Selectors are composable. They can be used as input to other selectors.

Give an example of Reselect usage?
    Let's take calculations and different amounts of a shipment order with the simplified usage of Reselect:

    import { createSelector } from 'reselect'

    const shopItemsSelector = state => state.shop.items
    const taxPercentSelector = state => state.shop.taxPercent

    const subtotalSelector = createSelector(
    shopItemsSelector,
    items => items.reduce((acc, item) => acc + item.value, 0)
    )

    const taxSelector = createSelector(
    subtotalSelector,
    taxPercentSelector,
    (subtotal, taxPercent) => subtotal * (taxPercent / 100)
    )

    export const totalSelector = createSelector(
    subtotalSelector,
    taxSelector,
    (subtotal, tax) => ({ total: subtotal + tax })
    )

    let exampleState = {
    shop: {
        taxPercent: 8,
        items: [
        { name: 'apple', value: 1.20 },
        { name: 'orange', value: 0.95 },
        ]
    }
    }

    console.log(subtotalSelector(exampleState)) // 2.15
    console.log(taxSelector(exampleState))      // 0.172
    console.log(totalSelector(exampleState))    // { total: 2.322 }

*/