import React from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <Link to={`/edit/${id}`}>Edit</Link>
    <hr />
  </div>
);

/* Not always needed
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
};
*/

export default ExpenseListItem;