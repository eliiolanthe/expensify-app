import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm  from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditPage = (props) => {
  return (
    <div>
      <h2>Edit page - id of {props.match.params.id}</h2>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          //console.log(expense)
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        //console.log(props);
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditPage);