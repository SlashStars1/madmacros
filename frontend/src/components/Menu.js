import React,{useEffect, useContext, useState} from 'react'
import AuthContext from './store/auth-context';
import Meal from './Meal';

const Menu = () => {
    const [meals, setMeals] = useState()
    const { cals, protein, food, submitted } = useContext(AuthContext); //we're getting only the necessary values from the context
    //Since submitted is a dependency, every time that submitted variable changes, the function inside useEffect will execute
    useEffect(()=>{
        console.log("Was the form submitted? " + submitted)
        /*
        fetch("http://localhost:5000/message")
        .then((res) => res.json())
        .then((data) => setMeals(data.message));
*/
    }
    
    
    , [submitted])
  

  return (
    <div>
        <Meal></Meal>
    </div>
  )
}

export default Menu