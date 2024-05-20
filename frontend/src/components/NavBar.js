
import { FaHeart } from "react-icons/fa6";
import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="nav-container">
        
       
        
        
        <ul className="nav-menu">
          <li><h1>MAD MACROS</h1></li>
          <li>Home</li>
          <li>Favorites <FaHeart/></li>
          <li>Log in</li>
        </ul>
    </div>
  )
}

export default NavBar;
