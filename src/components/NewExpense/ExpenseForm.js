import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //this will ensure that page will not reload

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');//two way binding
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

/*
Important point ro remember

we can use the useState function in differet manner like:
const[userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
});
const titleChangeHandler=(event)=>{
    setUserInput({
        ...userInput,
        enteredTitle:event.target.value,
    })
}
here we are depending on previous state for updating the state
whenever we are depending on previous state to update the state we have to use another alternative

we have to call like
setUserInput((prevState)=>{
    return{...prevState,enteredTitle:event.target.value}
});

if we are using this method then react will gurrantee that this state snapshot it give you here
in this inner function will always be the latest snapshot keeping all schedule state in mind.
So this is the safer way to ensure you that you always operate on latest snapshot.

so we should use this approach whenever your state update depeds on previous state.

*/

/* Two way binding

So,basically by using two way binding we assign value and set the empty string as starting point.
so as we entered any data  ,then itwill store the data and after that the form will be seen clear as before.
*/