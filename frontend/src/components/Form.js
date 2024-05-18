import React,{useContext, useEffect, useState} from 'react'
import "./Form.css"
import AuthContext from './store/auth-context';

const Form = () => {

  const { cals, setCals, protein, setProtein, food, setFood, meals, setMeals, submitted, setSubmitted } = useContext(AuthContext); //gets context


function submitHandler(event) {
    event.preventDefault() //prevents page from automatically refreshing 
    setSubmitted(true) //sets the submitted context value to true
    console.log(cals)
    console.log(protein)
    console.log(food)

    
   ///request using query string
   const myRequest = new Request(`http://localhost:5000/?cals=${cals}&protein=${protein}&food=${food}`);
   // Fetch data from the backend
  
   fetch(myRequest)
     .then((response) => response.json())
     .then((data) => {
       setMeals(data);
       console.log(meals);
     })
     .catch((error) => {
       console.log(error)
     });
    
     
  

}

  return (
    <div>
        <form id="form" onSubmit={submitHandler}>

            <div>
            <label>Select a restaraunt/cuisine</label>&nbsp;
            <select id="restaraunt/cuisine" value={food} onChange={(event) => setFood(event.target.value)}>
            <option value="Panera Bead">Panera Bread</option>
            <option value="Qdoba">Qdoba</option>
            <option value="Chipotle">Chipotle</option>
           
            <option value="Culvers">Culvers</option>
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

            <button type="submit" id="submitter" >Find meals</button>
        </form>

    </div>
    
  )
}

export default Form