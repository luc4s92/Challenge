import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm/BudgetForm";
import { BudgetList } from "./BudgetList/BudgetList";
import Axios from 'axios';

import '../app.css'
const url =`http://localhost:9000/api/`

export default function Budget() {
  
    
    const [budgets, setBudgets] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    
    useEffect(() =>{
        const getBudgets = ()=>{
          Axios.get(url)
          .then((res) =>setBudgets(res.data))
        }
        getBudgets()
    },[budgets])

    const createBudget =(budget,date) =>{
      Axios.post(url,{
        concept: budget.concept,
        amount: budget.amount,
        date: date,
        type: budget.type
      })
    }

    const updateBudget=(budget) =>{
      Axios.put(url+budget.id ,{     
        concept: budget.concept,
        amount: budget.amount,
      })
    }

    const deleteBudget = (id)=>{
      Axios.delete(url+id)
    }

   
  return (
    <>
      <div >
        <h1 className="h1">BudgetList</h1>
        <article className="grid-1-2">
            <BudgetList 
              budgets={budgets.filter(el => el.type === "Entry")}
              setDataToEdit={setDataToEdit}
              deleteBudget={deleteBudget}
              filter="Entry"
            />
          
            <BudgetForm
              updateBudget={updateBudget} 
              createBudget={createBudget}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit} 
            />
              <BudgetList 
              budgets={budgets.filter(el => el.type === "Exit")}
              setDataToEdit={setDataToEdit}
              deleteBudget={deleteBudget}
              filter="Exit"
            />
          </article>
      </div>
    </>
  );
}
