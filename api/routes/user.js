const express = require('express')

// get controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

//attach all the routes to the Router

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router