import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm/BudgetForm";
import { BudgetList } from "./BudgetList/BudgetList";

import '../app.css'

export default function Budget() {

    const [budgets, setBudgets] = useState([])

    useEffect(() =>{
        const getBudgets = () =>{
            fetch('http://localhost:9000/api')
            .then(res => res.json())
            .then(res => setBudgets(res))
            //console.log(budgets)
        }
        getBudgets()
    },[])

  return (
    <>
      <div className="container">
          <div className="left">
            <h2 className="alignC">BudgetList</h2>
            <BudgetList budgets={budgets}/>
          </div>
          <div className="right">
              <BudgetForm/>
          </div>
      </div>
    </>
  );
}
