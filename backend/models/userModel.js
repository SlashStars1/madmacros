
const mongoose = require('mongoose')
const bcrypt = require('bcrypt') //package used to encrypt password before pushing into db
const validator = require('validator') //package to validate email +password
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String, 
      required: true,
    }

  })
  
  //signup function
  userSchema.statics.signup = async function(email, password){

    //email and password validation
    if(!email || !password){ //if email or password is empty
      throw Error("Both the email and password field must be filled")
    }
    //check that email is valid
    if (!validator.isEmail(email)){
      throw Error("Email is invalid")
    }
    if (!validator.isStrongPassword(password)){
      throw Error("Password is not strong enough")
    }

    //check again that email doesn't already exist in db
    //this refers to the model
    const exists = await this.findOne({email}) 
    if (exists){ //if the email is already in the db
        throw Error("Email already being used")
    }
    //hash the password before placing into the db
    //we also have to add extra chars to it before adding the password (salting password)

    const salt = await bcrypt.genSalt(10) //The argument is the # of chars that will be added to the password as part of the salt

    const hash = await bcrypt.hash(password, salt) //bcrypt will hash the password with the salt for us

    //creates new user and returns  it 
    const user = await this.create({email, password: hash})
    return user
}

  module.exports = mongoose.model('User', userSchema)