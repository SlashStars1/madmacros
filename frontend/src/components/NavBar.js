
import { FaHeart } from "react-icons/fa6";
import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="nav-container">
       
      
        <ul className="nav-menu">
       
     
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}> <h3>MAD MACROS</h3></Link></li>
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}>Home</Link></li>
          <li><Link to="/favorites" style={{ textDecoration: 'none', color:'black' }}>Favorites <FaHeart/></Link></li>
          <li><Link to="/login" style={{ textDecoration: 'none', color:'black' }}>Login</Link></li>
          <li><Link to="/signup" style={{ textDecoration: 'none', color:'black' }}>Signup</Link></li>
        


        </ul>
        
    </div>
  )
}

export default NavBar;
