import React from 'react'
import './ExpenseItem.css'
// import  './Expenses'

export default function ExpenseDetails(props) {

  const clickHandler = ()=>{
    console.log('clicked');
  }

  const deleteExpense = ()=>{
    console.log('deleted')
  }

  return (
    <div className='add-css' >
       <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div>
      <button onClick={clickHandler}>change Title</button>
      <button onClick={deleteExpense}>X</button>
      </div>
    </div>
  )
}
