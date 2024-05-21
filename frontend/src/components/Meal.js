import React, {useState} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import './Meal.css'
const Meal = ({name, serving, imageURL, calories, protein, food}) => {
    
  const [heart, setHeart] = useState(false);
  function favoriteHandler(){
        //change open heart to filled in heart
        setHeart(!heart)

    }
    
    
  return (
    <div  className="meal-container">
    <div className='meal-name'>   <p>{name}</p></div>
     <p>   {serving}</p>
     <p>  {calories} cals</p>
     <p>   {protein}g protein</p>
       <div className="favoriteDiv">
         { heart ? <FaHeart onClick={favoriteHandler} /> :
       <FaRegHeart  onClick={favoriteHandler} /> }
       
       </div>

   </div>
  )
}

export default Meal