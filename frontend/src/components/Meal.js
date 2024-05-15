import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Meal = (name, image, calories, protein) => {
    function favoriteHandler(){
        //change open heart to filled in heart
       document.querySelector("#openHeart").replaceWith()
        //document.querySelector("#favoriteDiv").appendChild(<FaHeart id="regHeart"></FaHeart>)
        
        //TODO
        //add logic for user to favorite the item
    }

  return (
    <div className="meal-container">
        <img src='' alt=""></img>
        <p>Tuna wrap
        <br></br>300 cals
        <br></br>30g protein</p>
        <div id="favoriteDiv">
        <FaRegHeart id="openHeart" onClick={favoriteHandler} />
        </div>
    </div>
  )
}

export default Meal