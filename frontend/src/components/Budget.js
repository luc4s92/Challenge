import React, { useState, useEffect } from "react";
import BudgetForm from "./BudgetForm/BudgetForm";
import { BudgetList } from "./BudgetList/BudgetList";
import Axios from 'axios';

import '../app.css'

export default function Budget() {
  
    const url =`http://localhost:9000/api/`;

    /*const [budget, setBudget] = useState({
        concept: '',
        amount: 0,
        date: new Date().toISOString().toString(),
        type:''
    }) */
    const [dataToEdit, setDataToEdit] = useState(null)

    const [budgets, setBudgets] = useState([])

    useEffect(() =>{
        const getBudgets = ()=>{
          Axios.get(url)
          .then((res) =>setBudgets(res.data))
        }
        getBudgets()
    },[budgets])

    const createBudget =(budget) =>{
      Axios.post(url,{
        concept: budget.concept,
        amount: budget.amount,
        date: budget.date,
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
      console.log(id)
      Axios.delete(url+id)
      console.log('borrado')
    }

  return (
    <>
      <div >
        <h1 className="h1">BudgetList</h1>
        <article className="grid-1-2">
            <BudgetList 
              budgets={budgets}
              setDataToEdit={setDataToEdit}
              deleteBudget={deleteBudget}
            />
            <BudgetForm
              updateBudget={updateBudget} 
              createBudget={createBudget}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit} 
            />
          </article>
      </div>
    </>
  );
}
