import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";

const demoState = {
    expenses: [
        {
            id: "dsd5534sdfs",
            description: "January Report",
            note: "This was the final payment for the address",
            amount: 54500,
            createdAt: 0,
        },
    ],
    filters: {
        text: "rent",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    },
};

const expensesReducerState = [];
const filterReducerState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
};

// Expenses reducer
const expensesReducer = (state = expensesReducerState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return state.concat(action.expense);
        default:
            return state;
    }
};

// Filter reducer
const filterReducer = (state = filterReducerState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer,
    })
);

console.log(store.getState());

// Actions
const addExpenseAction = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0,
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    },
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(
    addExpenseAction({
        description: "Hey baby i am added",
        amount: 500,
        note: "This should be noted",
    })
);

/*
// Actions
const incrementAction = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// Reducer function to handle actions happening on the store
const storeReducerFn = (state = {count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
      default:
      return state;
  }
};

const counterStore = createStore(storeReducerFn);


counterStore.subscribe(() => {
  console.log(counterStore.getState());
});

counterStore.dispatch(incrementAction());
*/
