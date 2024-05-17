import React,{useEffect, useContext, useState} from 'react'
import AuthContext from './store/auth-context';
import Meal from './Meal';

const Menu = () => {
    const [meals, setMeals] = useState()
    const { cals, protein, food, submitted } = useContext(AuthContext); //we're getting only the necessary values from the context
    //Since submitted is a dependency, every time that submitted variable changes, the function inside useEffect will execute

  

  return (
    <div>
        {meals}
        <Meal></Meal>
    </div>
  )
}

export default Menu