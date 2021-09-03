import React from "react";

const BudgetListRow = ({ budget, setDataToEdit, deleteBudget }) => {
  let { concept, amount, date, id } = budget;
  return (
    <tr>
      <td data-label="Concept">{budget.concept}</td>
      <td data-label="Amount">{budget.amount} $</td>
      <td data-label="Date">{budget.date}</td>
      <td data-label="Type">{budget.type}</td>
      <td data-label="Actions">
        <button onClick={() => setDataToEdit(budget)}>Edit</button>
        <button onClick={() => deleteBudget(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BudgetListRow;
