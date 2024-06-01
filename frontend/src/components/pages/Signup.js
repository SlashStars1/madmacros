import React, {useState} from 'react'
import { useSignup } from '../hooks/useSignup'
const Signup = () => {

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{signup, error, isLoading} = useSignup()
    const submitHandler = async(e)=>{
        e.preventDefault()//prevent window reloading

        
    await signup(email, password) //pass in our states to our custom hook

    }

  return (
    <form className="signup" onSubmit={submitHandler}>
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
    </form>
  )
}

export default Signup