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
        <button className="rounded-button edit-btn" onClick={() => setDataToEdit(budget)}><i className="fas fa-edit"></i></button>
        <button className="rounded-button danger-btn" onClick={() => deleteBudget(id)}><i className="fas fa-trash-alt"></i></button>
      </td>
    </tr>
  );
};

export default BudgetListRow;
