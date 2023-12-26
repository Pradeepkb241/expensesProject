import React, { useState } from 'react'
// import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = seletedYear => {
    setFilteredYear(seletedYear);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className='expenses'>

      <ExpensesFilter 
      seleted={filteredYear} 
      onChangeFilter={filterChangeHandler} 
      />
       
      <ExpensesChart expenses ={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}
