import React, {useState} from 'react'

const Signup = () => {

    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = async(e)=>{
        e.preventDefault()//prevent window reloading

    }

  return (
    <form className="signup" onSubmit={submitHandler}>
        <h3>Sign up</h3>

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

        <button>Sign up</button>
    </form>
  )
}

export default Signup