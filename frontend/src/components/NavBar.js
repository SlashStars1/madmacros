
import { FaHeart } from "react-icons/fa6";
import React, { useState } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";
import { useUserAuthContext } from "./hooks/useUserAuthContext";
import burgerdumbell from "../assets/burgerdumbell.png";
import { FaAlignJustify } from "react-icons/fa6";

const NavBar = () => {
  const { logout } = useLogout();
  const { user } = useUserAuthContext();
  const [isOpen, setIsOpen] = useState(false); //state to control dropdown. dropdown starts off as not open

  const handleClick = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="nav-container">
      <div className="menu-icon" onClick={toggleMenu}>
      <FaAlignJustify className={isOpen ? 'fas fa-times' : 'fas fa-bars'}/> 
      {/**if dropdown is there, we assign the styles associated with fas fa-times*/}

       
      </div>
      
      <ul className={`title-container ${isOpen ? '' : 'hidden'}`}>
      <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>MAD MACROS</h1>
          </Link>
        </li>
      </ul>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu} >
      <li className={`logoAndTitle ${isOpen ? 'hidden' : ''} item`}>
          <img src={burgerdumbell} className="logo" alt="logo" />
        </li>
        
        <li className={`title`}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <h1>MAD MACROS</h1>
          </Link>
        </li>
        <li className = "item">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        </li>
        <li className="item">
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'black' }}>
            Favorites <FaHeart className="heart" />
          </Link>
        </li>
        {user && (
          <div className="item">
            <li>{user.email}</li>
            <li>
              <button onClick={handleClick}>Log Out</button>
            </li>
          </div>
        )}
        {!user && (
          <div className="item">
            <li>
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default NavBar;

