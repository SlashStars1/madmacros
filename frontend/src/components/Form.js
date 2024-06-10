import React,{useContext, useEffect, useState} from 'react'
import "./Form.css"
import AuthContext from './store/auth-context';
import { useUserAuthContext } from './hooks/useUserAuthContext';
import { FaLessThanEqual } from 'react-icons/fa6';
const Form = () => {

  const { cals, setCals, protein, setProtein, food, setFood, meals, setMeals, submitted, setSubmitted } = useContext(AuthContext); //gets context
  const [loading, setLoading] = useState(false); //loading state 

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


function submitHandler(event) {
    event.preventDefault() //prevents page from automatically refreshing 
    setSubmitted(true) //sets the submitted context value to true
    console.log(cals)
    console.log(protein)
    console.log(food)

    setLoading(true); //sets loading state to true 
    
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
       setLoading(false); //set loading state to false because it's done loading
     })
     .catch((error) => {
       console.log(error)
       setLoading(false);
     });

}

  return (
    <div>
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
      
        {(meals.length === 0 && submitted===true && loading===false) && <p>We found no results with this macro combo</p>}
        
    </div>
    {loading && <div className="loader-container"><p>Loading..</p><div className="loader"></div></div>}

    </div>
    
  )
}

export default Form