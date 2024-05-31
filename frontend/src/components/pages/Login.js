import React, {useState} from 'react'
import './Login.css'
const Login = () => {

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = async(e)=>{
        e.preventDefault()//prevent window reloading

    }

  return (
    
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
        onChange={(e)=> setEmail(e.target.value)}/>
        </div>

        <button>Log in</button>
    </form>
   
    
  )
}

export default Login