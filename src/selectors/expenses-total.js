export default (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => {
            return sum + parseFloat(value);
        }, 0);
};