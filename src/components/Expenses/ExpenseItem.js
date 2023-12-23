import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

export default function ExpenseItem(props) {
  const clickHandler = ()=>{
    console.log('clicked');
  }

  const deleteExpense = ()=>{
    console.log('deleted')
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title}/>
      <button onClick={clickHandler}>change Title</button>
      <button onClick={deleteExpense}>X</button>
    </Card>
    </li>
  )
}
