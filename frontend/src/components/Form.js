import React,{useContext, useEffect, useState} from 'react'
import "./Form.css"
import AuthContext from './store/auth-context';

const Form = () => {

  const { cals, setCals, protein, setProtein, food, setFood, meals, setMeals, submitted, setSubmitted } = useContext(AuthContext); //gets context

  useEffect(() => {
    const form = document.getElementById("form"); //gets form element using js
    const submitter = document.getElementById("submitter"); //gets submit button element using js
    const formData = new FormData(form, submitter ); //creates form data object to send to server using the form and submit button  
    const options = {
        body: formData,
    };
   ///const myRequest = new Request('http://localhost:5000/', options);
   const myRequest = new Request('http://localhost:5000/');
    // Fetch data from the backend
    fetch(myRequest)
      .then((response) => response.text())
      .then((data) => {
        setMeals(data);
      });
      console.log(meals);
  }, [submitted]);

  

function submitHandler(event) {
    event.preventDefault() //prevents page from automatically refreshing 
    setSubmitted(true) //sets the submitted context value to true
    console.log(cals)
    console.log(protein)
    console.log(food)
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