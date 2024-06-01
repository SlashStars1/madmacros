import { useState } from "react";
import { useUserAuthContext } from "./useUserAuthContext";

export const useLogin = () =>{

    const [error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const {dispatch} = useUserAuthContext()
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


    const login = async (email, password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${apiUrl}/api/user/login`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok){ //if the response was not ok/200
            setIsLoading(false)
            setError(json.error)
            console.log(json.error)
        }
        if (response.ok){ //if the response was okay
            //save the user (email and token) to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }
        return {login, isLoading, error}
    
}