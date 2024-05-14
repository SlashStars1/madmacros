import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const Meal = () => {

    function favoriteHandler(){
        //change open heart to filled in heart
       document.querySelector("#openHeart").replaceWith()
        //document.querySelector("#favoriteDiv").appendChild(<FaHeart id="regHeart"></FaHeart>)
        
        //TODO
        //add logic for user to favorite the item
    }

  return (
    <div>
        <p>Tuna wrap</p>
        <p>300 cals</p>
        <p>30g protein</p>
        <div id="favoriteDiv">
        <FaRegHeart id="openHeart" onClick={favoriteHandler} />
        </div>
    </div>
  )
}

export default Meal