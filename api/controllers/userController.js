const User = require('../models/userModel')
const jwt = require('jsonwebtoken') 

const createToken = (_id) => { //uses the SECRET string and will expire in 3 days 
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' }) 
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a jw token
    const token = createToken(user._id)

    res.status(200).json({email, token}) //send email and token if login was successful
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup user
const signupUser = async (req, res) => {
  const {email, password} = req.body //get email and pass from request body 

  try {
    const user = await User.signup(email, password)

    // create a token using user id
    const token = createToken(user._id)

    res.status(200).json({email, token}) //send email and token if signup was successful 
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser } //export functions