import React from "react";
import BudgetListRow from "../BudgetListRow";

import './BudgetList.css'

export const BudgetList = ({budgets, setDataToEdit, deleteBudget, filter}) => {

  let total = 0
  budgets.forEach(budget => {
    total += budget.amount
  });

  return (
    < >
      <div>
        <h3 className="type">{filter}</h3>
      <table>
        
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) =>(
            <BudgetListRow
              setDataToEdit={setDataToEdit}
              deleteBudget={deleteBudget}
              key={budget.id}
              budget={budget}
            />
          ))}
        </tbody>
      </table>
      <h4 className="total">Total: $ {total}</h4>
      </div>
    </>
  );
};
