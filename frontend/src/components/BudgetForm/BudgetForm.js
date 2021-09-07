import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  concept: "",
  amount: 0,
  date: new Date().toISOString().slice(0, 19).replace('T', ' '),
  type: "",
};

export default function BudgetForm({
  createBudget,
  dataToEdit,
  updateBudget,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.concept === "" || form.amount === 0 || form.type === "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    
    if (form.id === null) {
      let auxDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
      createBudget(form,auxDate);
    } else {
      updateBudget(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
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
        {dataToEdit ? (
          ""
        ) : (
          <div>
            <label>Transaction Type</label>
            <select name="type" onChange={handleChange}>
              <option value="">------</option>
              <option value="Entry">Entry</option>
              <option value="Exit">Exit</option>
            </select>
          </div>
        )}

        <input className="button" type="submit" />
      </form>
    </>
  );
}
