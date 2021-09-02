import React from 'react'


export default function BudgetForm({budget, setBudget}){

  //  const [form, setForm] = useState({})
   // const [date, setDate] = useState(new Date().toLocaleDateString())
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
        //let dateS = date.toString()
        console.log('Fecha en string',date)
        setBudget({
            ...budget,
            [budget.date] : date
            })
        console.log(budget.date)
        const requetInit ={
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(budget)
        }
        
        fetch('http://localhost:9000/api', requetInit)
            .then(res => res.json())
            .then(res => console.log(res))
        console.log(budget)
    }

    return(
        <>
            <h2>Alta formulario</h2>
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