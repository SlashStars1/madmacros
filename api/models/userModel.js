const mongoose = require('mongoose')
const bcrypt = require('bcrypt')  //used to encrypt password 
const validator = require('validator') //validates email and pass

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true //unique email is necessary while a unique pass is not
  },
  password: {
    type: String,
    required: true
  }
})

//signup method
userSchema.statics.signup = async function(email, password) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }

  const exists = await this.findOne({ email }) //check if the email already exists in db 

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)  //adds 10 extra chars before hashing
  const hash = await bcrypt.hash(password, salt) //hashes password with salt

  const user = await this.create({ email, password: hash }) //creates user object with pass and email 
 
  return user
}

// login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email }) 
  if (!user) { ///if user doesn't exist throw error
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password) //boolean to compare password and stored password
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)