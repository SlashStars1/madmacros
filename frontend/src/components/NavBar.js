import food from "./food.jpg"
import fries from "./fries.jpg"
import burger from "./burger.jpg"
import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div id="divWhole">
        <div class="row">
            <div class="column">
     
        <img src={burger}></img>
        
        </div>
        <div class="column">
        
        <h1>MAD MACROS</h1>
        
        </div>
        </div>
    </div>
  )
}

export default NavBar;
