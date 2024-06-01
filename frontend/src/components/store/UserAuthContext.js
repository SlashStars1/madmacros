import {createContext, useReducer, useEffect} from 'react'

export const UserAuthContext = createContext()

export const authReducer = (state, action) =>{
    switch (action.type){
        case 'LOGIN': //if the action type is login
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default:
            return state //if no changes return original state
    }
}

export const UserAuthContextProvider = ({children})=>{
    const[state, dispatch] = useReducer(authReducer,{
        user: null //initial state
    })


    //when application we are loads this runs once to check if we are already
    //logged in and updates the global state accordingly 
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
    
        if (user) { 
          dispatch({ type: 'LOGIN', payload: user }) 
        }
      }, [])

    console.log('AuthContext state: ', state)

    return(
        <UserAuthContext.Provider value={{...state, dispatch}}>
            {children}
        </UserAuthContext.Provider>
    )
}
