import React, { useState, useEffect } from 'react';

const initialForm = {
    id: null,
    concept: "",
    amount: 0,
    date: new Date().toISOString().toString(),
    type:''
  };

export default function BudgetForm({ createBudget, dataToEdit, updateBudget, setDataToEdit}){

    const [form, setForm] = useState(initialForm)

    useEffect(() =>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
      },[dataToEdit])

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(form.concept === '' || form.amount === 0 || form.type ===''){
            alert('Todos los campos son obligatorios')
            return
        }
        let date = new Date().toISOString().toString()
        
        if (form.id === null) {
            setForm({
                ...form,
                [form.date] : date
                })
            createBudget(form);
          } else {
            updateBudget(form);
          }
        handleReset()
    }

    const handleReset =(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Concept</label>
                <input
                    type="text"
                    value={form.concept}
                    name="concept"
                    onChange={handleChange}
                />
                <label>Amount</label>
                <input
                    value={form.amount}
                    type="number"
                    name="amount"
                    onChange={handleChange}
                />
                {dataToEdit ? '':(<select
                    name="type"
                    onChange={handleChange}
                >
                    <option value="">------</option>
                    <option value="entry">Entry</option>
                    <option value="exit">Exit</option>
                </select>) }
                
                <input
                    type="submit"
                />
            </form>
        </>
    )
}