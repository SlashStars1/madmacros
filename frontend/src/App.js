
import "./App.css";
import NavBar from './components/NavBar';
import React, {useState, useEffect} from "react";
import {AuthContextProvider} from './components/store/auth-context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
import Favorites from "./components/Favorites";
function App() {

  return (
    <Router>
    <AuthContextProvider>
    <div className="App">
      <NavBar/>
    <Routes>
    <Route path="/" element={<Home ></Home>}></Route>
    <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      </Routes>
   
    </div>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
