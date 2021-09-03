import React from "react";
import BudgetListRow from "../BudgetListRow";

import './BudgetList.css'

export const BudgetList = ({budgets, setDataToEdit, deleteBudget}) => {
  return (
    < >
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
    </>
  );
};
