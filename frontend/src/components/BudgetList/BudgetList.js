import React from "react";

import './BudgetList.css'

export const BudgetList = ({budgets}) => {
  return (
    <div className="fondo2">
      <table>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(budget =>(
            <tr key={budget.id}>
              <th>{budget.concept}</th>
              <th>{budget.amount}</th>
              <th>{budget.date}</th>
              <th>{budget.type}</th>
            </tr>  
          ))}
        </tbody>
      </table>
    </div>
  );
};
