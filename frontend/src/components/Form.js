import React,{useContext, useEffect, useState} from 'react'
import "./Form.css"
import AuthContext from './store/auth-context';
import { useUserAuthContext } from './hooks/useUserAuthContext';
const Form = () => {

  const { cals, setCals, protein, setProtein, food, setFood, meals, setMeals, submitted, setSubmitted } = useContext(AuthContext); //gets context
const {user} = useUserAuthContext()
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


function submitHandler(event) {
    event.preventDefault() //prevents page from automatically refreshing 
    setSubmitted(true) //sets the submitted context value to true
    console.log(cals)
    console.log(protein)
    console.log(food)

    
   ///request using query string


   const myRequest = new Request(`${apiUrl}/submit/?cals=${cals}&protein=${protein}&food=${food}`);
   // Fetch data from the backend and setting the meals variable inside the context to that data so that 
   //other components in the frontend can use that information

   fetch(myRequest)
     .then((response) =>
    
      response.json())
     .then((data) => {
       setMeals(data);
       console.log(meals);
     })
     .catch((error) => {
       console.log(error)
     });

}

  return (
    <div className="bigDiv shadow-2xl">
      <br></br>
        <form id="form" >

            <div>
            <label>Select a restaraunt/cuisine</label>&nbsp;
            <select id="restaraunt/cuisine" value={food} onChange={(event) => setFood(event.target.value)}>
            <option value="Panera Bread">Panera Bread</option>
            <option value="Chic Fil A">Chic Fil A</option>
            <option value="Chipotle">Chipotle</option>
            <option value="Ihop">Ihop</option>
            <option value="Jamba">Jamba</option>
            <option value="Shake Shack">Shake Shack</option>
            <option value ="Dairy Queen">Dairy Queen</option>
         <option value = "Little Caesars">Little Caesars</option>
         <option value="Subway">Subway</option>
         <option value="Panda Express">Panda Express</option>
            </select>
            </div>
            <div id="largerdiv">
            <div>
                <label>Enter a calorie limit</label> &nbsp;
                <input type="number" placeholder='500'  value={cals} onChange={(event) => setCals(event.target.value)}></input> cals
            </div>

            <div>
                <label>Enter a protein goal</label>&nbsp;
                <input type="number" placeholder='30'  value={protein} onChange={(event) => setProtein(event.target.value)}></input> g
            </div>
            </div>

            <button onClick={submitHandler} id="submitter" >Find meals</button>
        </form>

    </div>
    
  )
}

export default Form