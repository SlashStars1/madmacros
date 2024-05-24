
const { TopologyDescription } = require("mongodb");
const User = require("../models/userModel")
const jwt = require('jsonwebtoken') //json web token package

//will create jw tokens
const createToken =(_id)=>{
    //we're using a secret string to log in 
    //the user would remain logged in for 3 days before the jwt expires
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})

}

//login user 
const loginUser = async (req, res) =>{
    res.json({msg: 'login user'})
}

//signup user and saves to dtatabse 
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