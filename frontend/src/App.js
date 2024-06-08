
import "./App.css";
import NavBar from './components/NavBar';
import React, {useState, useEffect} from "react";
import {AuthContextProvider} from './components/store/auth-context';
import { UserAuthContextProvider } from "./components/store/UserAuthContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from "./components/Home";
import { UpdatedHome } from "./components/UpdatedHome"; 
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import FavoritesTwo from "./components/FavoritesTwo"
function App() {

  return (
    <Router>
    <AuthContextProvider>
      <UserAuthContextProvider>
    <div className="App">
      <NavBar className="Navbar"/>
    <Routes>
    <Route path="/" element={<Home ></Home>}></Route>
    <Route path="/favorites" element={<FavoritesTwo></FavoritesTwo>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
      
      </Routes>
   
    </div>
    </UserAuthContextProvider>
    </AuthContextProvider>
    

    </Router>
  );
}

export default App;
