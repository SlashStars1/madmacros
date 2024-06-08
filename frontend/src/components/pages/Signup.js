import React, {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import { useUserAuthContext } from '../hooks/useUserAuthContext';
import { FaCircleCheck} from "react-icons/fa6";
import './Login.css'

const Signup = () => {
        const {user} = useUserAuthContext()
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{signup, error, isLoading} = useSignup()
    const submitHandler = async(e)=>{
        e.preventDefault()//prevent window reloading

        
    await signup(email, password) //pass in our states to our custom hook

    }

  return (
<>
        {user ? (<div className="success"><FaCircleCheck></FaCircleCheck><h2>Sign up was successful!</h2> Please return to the Home page to start favoriting meals</div>)
        : 
        
    (<form id="form" className="signup shadow-2xl" onSubmit={submitHandler}>
        <h3>Sign up</h3>

<div>
        <label>Email:</label> &nbsp;
        <input 
        type="email"
        onChange={(e)=> setEmail(e.target.value)}
        value={email}/>
</div>
<div>
        
<label>Password:</label> &nbsp;
        <input 
        type="password"
        onChange={(e)=> setPassword(e.target.value)}
        value={password}/>
</div>

        <button disabled={isLoading}>Sign up</button>

        {error && <div className="error">{error}</div>}

        <p> Already have an account? Click here to <Link to="/login"> login </Link></p>
    </form>)} </>
  )
}

export default Signup