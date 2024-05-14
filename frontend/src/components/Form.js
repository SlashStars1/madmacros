import React,{useState} from 'react'
import "./Form.css"
const Form = () => {
    
const [cals, setCals]= useState(500);
const [protein, setProtein] = useState(30);

function submitHandler() {
    
}

function calorieHandler(event){
   setCals(event.target.value);
    
}

function proteinHandler(event){
    setProtein(event.target.value);
}

  return (
    <div>
        <form>

            <div>
            <label>Select a restaraunt/cuisine</label>&nbsp;
            <select id="restaraunt/cuisine">
            <option value="Qdoba">Qdoba</option>
            <option value="Chipotle">Chipotle</option>
            <option value="Panera Bead">Panera Bread</option>
            <option value="Culvers">Culvers</option>
            </select>
            </div>
            <div id="largerdiv">
            <div>
                <label>Enter a calorie limit</label> &nbsp;
                <input type="number" placeholder='500'  value={cals} onChange={calorieHandler}></input> cals
            </div>

            <div>
                <label>Enter a protein goal</label>&nbsp;
                <input type="number" placeholder='30'  value={protein} onChange={proteinHandler}></input> g
            </div>
            </div>

            <button type="submit" onClick={submitHandler}>Find meals</button>
        </form>

    </div>
  )
}

export default Form