import React from 'react'
import AuthContext from './store/auth-context';


const Menu = () => {
    const { cals, protein, food, submitted } = useContext(AuthContext); //we're getting only the necessary values from the context

    if (submitted){
        //fetch the results array from the 
       //...
        
    }

  return (
    <div></div>
  )
}

export default Menu