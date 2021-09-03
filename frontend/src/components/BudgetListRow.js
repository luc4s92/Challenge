import React from 'react'

const BudgetListRow = ({budget}) => {
    return (
      
              <tr >
              <td>{budget.concept}</td>
              <td>{budget.amount}</td>
              <td>{budget.date}</td>
              <td>{budget.type}</td>
              <td>
                  <button>Edit</button>              
                  <button>Delete</button>              
              </td>
            </tr>  
       
    )
}

export default BudgetListRow
