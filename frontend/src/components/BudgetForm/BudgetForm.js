import React from 'react'

const initialForm = {
    id: null,
    concept: "",
    amount: 0,
    date: '',
    type:''
  };

export default function BudgetForm({budget, setBudget, createBudget}){

    const handleChange = (e)=>{
        setBudget({
            ...budget,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(budget.concept === '' || budget.amount === 0 || budget.type ===''){
            alert('Todos los campos son obligatorios')
            return
        }
        let date = new Date().toISOString().toString()

        setBudget({
            ...budget,
            [budget.date] : date
            })
        createBudget(budget)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Concept</label>
                <input
                    type="text"
                    value={budget.concept}
                    name="concept"
                    onChange={handleChange}
                />
                <label>Amount</label>
                <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                />
                <select
                    name="type"
                    onChange={handleChange}
                >
                    <option value="">------</option>
                    <option value="entry">Entry</option>
                    <option value="exit">Exit</option>
                </select>
                <input
                    type="submit"
                />
            </form>
        </>
    )
}