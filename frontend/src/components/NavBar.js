
import { FaHeart } from "react-icons/fa6";
import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-container">
       
      
        <ul className="nav-menu">
       
     
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}> <h1>MAD MACROS</h1></Link></li>
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}>Home</Link></li>
          <li><Link to="/favorites" style={{ textDecoration: 'none', color:'black' }}>Favorites <FaHeart/></Link></li>
        
        </ul>
        
    </div>
  )
}

export default NavBar;
