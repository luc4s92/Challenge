import React from "react";
import BudgetListRow from "../BudgetListRow";

import './BudgetList.css'

export const BudgetList = ({budgets}) => {
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
              key={budget.id}
              budget={budget}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
