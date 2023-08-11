
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Initil_Expenses = [
  {id : 'e1', title : 'Car Insurance', amount : 290.78, date : new Date(2022, 0, 10)},
  {id : 'e2', title : 'Wooden Table', amount : 450, date : new Date(2021, 11, 20)},
  {id : 'e3', title : 'Clock', amount : 350, date : new Date(2021, 7, 15)},
  {id : 'e4', title : 'Indoor Plant', amount : 190.78, date : new Date(2019, 5, 22)}
]

function App() {

  const [expenses,setExpenses] = useState(Initil_Expenses)

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;