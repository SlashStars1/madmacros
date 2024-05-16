import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import './Meal.css'
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
        <img id="scrambledEggBriocheImg" src='https://www.panerabread.com/content/dam/panerabread/menu-omni/integrated-web/grid/rect/bacon-scrambled-egg-and-cheese-on-brioche.jpg.transform/rect-grid-image/image.20240515.jpg' alt="scrambled egg sandwich"></img>
        <p>Scrambled Egg & Cheese on Brioche
        <br></br> 1 sandwich
        <br></br>400 cals
        <br></br>21g protein</p>
        <div id="favoriteDiv">
        <FaRegHeart id="openHeart" onClick={favoriteHandler} />
        </div>
    </div>
  )
}

export default Meal