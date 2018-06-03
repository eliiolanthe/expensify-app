import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ACTION GENERATORS
//Add expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//Remove expense
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//Edit expense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//Set text filter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//Sort by date
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

//Sort by amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

//Set start date
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

//Set end date
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});


// REDUCERS
//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense); //not using push because it changes state
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates //add new + override state properties
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // or amount
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

// Get visible expenses (expenses, and filters params)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy ===  'date') {
      return a.createdAt > b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount > b.amount ? 1 : -1;
    }
  });
}


//const store = createStore(expensesReducer);
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
});

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1125));
// store.dispatch(setEndDate());

const exp1 = store.dispatch(addExpense({ description: 'Rent lunch', amount: 3000, createdAt:1000 }));
const exp3 = store.dispatch(addExpense({ description: 'Lunch', amount: 50, createdAt: 300 }));
const exp2 = store.dispatch(addExpense({ description: 'Lunch Poop', amount: 50, createdAt: 100 }));

store.dispatch(setStartDate(125));
store.dispatch(setEndDate(1125));

//store.dispatch(removeExpense({ id: exp1.expense.id }));
// store.dispatch(editExpense(exp2.expense.id, { amount: 600})); //id & updates obj

store.dispatch(setTextFilter('lunch'));


// store.dispatch(sortByDate());
 store.dispatch(sortByAmount());

//console.log(exp1.expense.id)

/*
const demoState = {
  expenses: [{
    id: 'sdjskd',
    description: 'January rent',
    note: 'Final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
  }
};
*/

const user = {
  name: 'jen',
  age: 25
}

//console.log({...user})