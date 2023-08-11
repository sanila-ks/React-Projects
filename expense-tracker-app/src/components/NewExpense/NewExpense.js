import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const EditingHandler = () => {
        setIsEditing(true)
    }

    const cancelHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={EditingHandler}>Add Expense</button>}
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelHandler}
                />
            }
        </div>
    )
}

export default NewExpense
