import React from "react";

const BudgetListRow = ({ budget, setDataToEdit,deleteBudget }) => {
  let { concept, amount, date, id } = budget;
  return (
    <tr>
      <td>{budget.concept}</td>
      <td>{budget.amount}</td>
      <td>{budget.date}</td>
      <td>{budget.type}</td>
      <td>
        <button onClick={() => setDataToEdit(budget)}>Edit</button>
        <button onClick={()=> deleteBudget(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default BudgetListRow;
