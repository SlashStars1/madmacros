
import { FaHeart } from "react-icons/fa6";
import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import { useUserAuthContext } from "./hooks/useUserAuthContext";

const NavBar = () => {

  const {logout} = useLogout()
  const {user} = useUserAuthContext()

  const handleClick=()=>{
    logout();
  }

  return (
    <div id="nav-container">
       
      
        <ul className="nav-menu">
       
     
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}> <h3>MAD MACROS</h3></Link></li>
          
          <li><Link to="/"style={{ textDecoration: 'none', color:'black'  }}>Home</Link></li>
          <li><Link to="/favorites" style={{ textDecoration: 'none', color:'black' }}>Favorites <FaHeart className="heart"/></Link></li>
          {user && (<div><li>{user.email}</li>
          <li><button onClick={handleClick}>Log Out</button></li>
          </div>)}
        {!user && (<div>  <li><Link to="/login" style={{ textDecoration: 'none', color:'black' }}>Login</Link></li>
         
        </div>)}
      


        </ul>
        
    </div>
  )
}

export default NavBar;
