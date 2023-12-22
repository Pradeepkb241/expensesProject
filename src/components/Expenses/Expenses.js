import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = seletedYear => {
    setFilteredYear(seletedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>NO Expense Found.</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map(expense =>{
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
      />
    })
  }
  return (
    <Card className='expenses'>

      <ExpensesFilter 
      seleted={filteredYear} 
      onChangeFilter={filterChangeHandler} 
      />
      {expensesContent}
      
      
      {/* {props.items.map((expense) => (
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
      />))} */}


      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} location={props.items[0].location} />
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} location={props.items[1].location} />
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} location={props.items[2].location} />
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} location={props.items[3].location} /> */}
    </Card>
  )
}
