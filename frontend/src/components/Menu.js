import React,{useEffect, useContext, useState} from 'react'
import AuthContext from './store/auth-context';
import Meal from './Meal';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useUserAuthContext } from './hooks/useUserAuthContext';



const Menu = () => {
 
    const { food,meals, error, submitted } = useContext(AuthContext); //we're getting only the necessary values from the context
    //Since submitted is a dependency, every time that submitted variable changes, the function inside useEffect will execute
  const {setError} = useContext(AuthContext)
    const {user} = useUserAuthContext()

    useEffect(() => {
      if (user){
        setError("");
      }
       }
    , [user]);
//NOTE: Capitalization DOES matter: notice meal.calories will pass an empty prop but meal.Calories will correctly pass it
  return (
    <div >

      {error==""  ? <></> : <div className="error">{error}</div>}
    
    {(meals.length > 0)? (meals.map((meal)=> 
    
    <Meal key={meal.Name} 
    name={meal.Name} food={food} protein={meal["Protein (g)"]} calories={meal.Calories} serving=
    {meal["Serving Size Description"]}  fav={false}/>
   
    
    )) : <p> </p>} 
    {(meals.length === 0 && submitted===true)? <p>We found no results with this macro combo</p> :<p></p>}
  
  </div>
  )
}

export default Menu