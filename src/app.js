import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/confugureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'gas bill', amount: 150, createdAt: 140}));
store.dispatch(addExpense({description: 'water bill', amount: 300, createdAt: 100}));
store.dispatch(addExpense({description: 'dog food', amount: 200, createdAt: 230}));
store.dispatch(addExpense({description: 'cat food', amount: 50, createdAt: 160}));
//store.dispatch(setTextFilter('food')); //bill
//store.dispatch(sortByAmount());

//const state = store.getState();
//console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'))