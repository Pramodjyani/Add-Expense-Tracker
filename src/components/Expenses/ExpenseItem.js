import React, { useState } from "react";
//use state is a react hook
//all the hooks are recognised by the start of its name 'use' as prefix
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
//hooks must only be called inside react component function neither in nested function.
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("soe");
  //first element is current stae value and second is a function for updating that.
  //here in the array title is just a pointer at just managed value
  //and the setTitle is a funcion which we later call to set a new value.

  const clickhandler = () => {
    setTitle("Updated!");

    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickhandler}>Change Title</button>
        {/* its adds an event listner for click events tothis buton
      //a function passed a value on on click */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
//with using state we can change values and when we do change react wll reevaluate
//that particular compnent in which we will call state
