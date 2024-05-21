
const { TopologyDescription } = require("mongodb");
const User = require("../models/userModel")

//login user 
const loginUser = async (req, res) =>{
    res.json({msg: 'login user'})
}

//signup user
const signupUser = async(req, res) =>{
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password)
        res.status(200).json({email, user}) //if created sends okay status and the user and email
    }
    catch(error){ //if ther's an error sends message and 400 status
        res.status(400).json({error: error.message})
    }

    res.json({msg: 'signup user'})
}

module.exports = {signupUser, loginUser}