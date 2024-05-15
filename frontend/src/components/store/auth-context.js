import React, { useState, createContext } from 'react';

//create context 
const AuthContext = createContext({
    //values
  cals: 500,
  protein: 30,
  food: 'Panera Bread',
  submitted: false,
  //Placeholder function set the values
  setCals: () => {}, 
  setProtein: () => {},
  setFood: () => {},
  setSubmitted:()=> {}
});

export function AuthContextProvider(props) {
    //states for different values, and initializes with default values 
  const [cals, setCals] = useState(500); 
  const [protein, setProtein] = useState(30);
  const [food, setFood] = useState("Panera Bread");
  const [submitted, setSubmitted] = useState(false);

  //The provider provides context to the the child components
  //The value prop is what is passed through to these children
  return (
    <AuthContext.Provider value={{
      cals,
      protein,
      food,
      submitted,
      setCals,
      setProtein,
      setFood,
      setSubmitted
    }}>

      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
