import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);

  // useState returns an array where [0] returns the value itself in the argument and [1] returns the function to update the initial value.
  // Hence using array destructuring to store value in title and point the setTitle to the function that can update the initial value.

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("Clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
