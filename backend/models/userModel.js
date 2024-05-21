
const mongoose = require('mongoose')

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
  
  //signup method
  userSchema.statics.signup = async function(email, password){

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