
import "./App.css";
import Form from './components/Form';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import React, {useState, useEffect} from "react";

import {AuthContextProvider} from './components/store/auth-context';

function App() {

  //we put the AuthContextProvider in the App so that all the child components within it can acess the context!
 
 
  return (
    <AuthContextProvider>
    <div className="App">
    
<Form></Form>
<Menu></Menu>
    </div>
    </AuthContextProvider>
  );
}

export default App;
