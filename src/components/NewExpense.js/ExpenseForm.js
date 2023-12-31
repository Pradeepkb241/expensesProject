import React, { useState } from 'react'
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [eneteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');

    const [isFormVisble, setFormVisible] = useState(false);

    //Alternative
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //Alternative 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value};
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    }
    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(eneteredDate),
            location: enteredLocation
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredLocation('');

        setFormVisible(false);

    }

   

    const openForm = () => {
        setFormVisible(!isFormVisble);
    }

    const closeForm = () => {
        setFormVisible(false);
    }

    return (
        <>
            
                <div>
                    {!isFormVisble && (<button type="button" onClick={openForm} >Add new Expense</button>)}
                    {isFormVisble && (<form onSubmit={submitHandler} >
                        <div className='new-expense__controls'>
                            <div className='new-expense__control'>
                                <label>Title</label>
                                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                            </div>

                            <div className='new-expense__control'>
                                <label>Amount</label>
                                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                            </div>
                            <div className='new-expense__control'>
                                <label>Location</label>
                                <input type="text" value={enteredLocation} onChange={locationChangeHandler} />
                            </div>

                            <div className='new-expense__control'>
                                <label>Date</label>
                                <input type="date" min='2023-01-01' max='2028-12-31' value={eneteredDate} onChange={dateChangeHandler} />
                            </div>

                        </div>
                        <div className='new-expense__actions'>
                            <button type="button" onClick={closeForm}>Cancel</button>
                            <button type='submit'>Add Expense</button>

                        </div>
                    </form>)}
                </div>
            



        </>
    )
}
