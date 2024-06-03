import React, {useState} from 'react'
import './Login.css'
import { useLogin } from '../hooks/useLogin'
import { useUserAuthContext } from '../hooks/useUserAuthContext'
import { Link } from "react-router-dom";
import { FaCircleCheck} from "react-icons/fa6";

const Login = () => {

  const {user} = useUserAuthContext()
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin() //grab login function from useLogin hook

    const submitHandler = async(e)=>{
        e.preventDefault()//prevent window reloading

        
       await login(email, password)

    
    }

  return (
    <>
    {!user ?
      (
    <form className="login" onSubmit={submitHandler}>
        <h3>Log in</h3>

<div>
        <label>Email:</label> &nbsp;
        <input 
        type="email"
        onChange={(e)=> setEmail(e.target.value)}/>
</div>

<div>
<label>Password:</label> &nbsp;
        <input 
        type="password"
        onChange={(e)=> setPassword(e.target.value)}/>
        </div>

        <button disabled={isLoading}>Log in</button>

        {error && <div className="error">{error}</div>}

        <p>Don't have an account? Click here to <Link to="/signup">sign up </Link></p>
    </form>) : (<div className="success"><FaCircleCheck></FaCircleCheck><h2>Log in was successful!</h2> Please return to the Home page to start favoriting meals</div>)}
   </>
    
  )
}

export default Login