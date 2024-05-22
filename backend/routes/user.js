const express = require('express')

//controller function
const {signupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

//login route: post requests to handle form data
router.post('/login',loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router