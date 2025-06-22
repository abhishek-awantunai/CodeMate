/*

When to use useState vs useReducer?

The decision of whether to use useState or useReducer isn't always black and white; there are many shades of grey. But,

use useState if you have:

JavaScript primitives as state
Simple state transitions
Business logic within your component
Different properties that don't change in any correlated way and can be managed by multiple useState hooks
use useReducer if you have:

JavaScript objects or arrays as state
Complex state transitions
Complicated business logic more suitable for a reducer function (to separate concern of it)
Different properties tied together that should be managed in one state object (when state depends on state)

*/