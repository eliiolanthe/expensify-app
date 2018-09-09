import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm  from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// const EditPage = (props) => {
//   return (
//     <div>
//       <h2>Edit page - id of {props.match.params.id}</h2>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           //console.log(expense)
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         //console.log(props);
//         props.dispatch(removeExpense({id: props.expense.id}));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// }

export class EditPage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Edit page</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);