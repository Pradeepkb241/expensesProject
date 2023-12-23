import React,{useState} from 'react'

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense.js/NewExpense";
// import ExpenseItem from "./components/ExpenseItem";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
    location: 'banglore',
  },
  { id: 'e2', 
    title: 'New TV',
    amount: 799.49, 
    date: new Date(2023, 2, 12), 
    location: 'Delhi', },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
    location: 'banglore Hal',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
    location: 'banglore',
  },
];

function App() {
 
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    // console.log(expense); 
    setExpenses(prevExpenses=>{
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
