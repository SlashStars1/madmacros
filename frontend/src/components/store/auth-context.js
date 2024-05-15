import React, { useState, createContext } from 'react';

const AuthContext = createContext({
  cals: 500,
  protein: 30,
  food: 'Panera Bread',
  setCals: () => {}, 
  setProtein: () => {},
  setFood: () => {}
});

export function AuthContextProvider(props) {
    //sets the stae of cal and cals within the context to placeholder values.
  const [cals, setCals] = useState(500); 
  const [protein, setProtein] = useState(30);
  const [food, setFood] = useState("Panera Bread");

  return (
    <AuthContext.Provider value={{
      cals,
      protein,
      food,
      setCals,
      setProtein,
      setFood
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
