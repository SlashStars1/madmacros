
const jwt = require('jsonwebtoken')
const User = require("../models/userModel")
//the next will continue onto the routes after this middlware 
const requireAuth = async (req, res, next) =>{
    

    //verify authentication
    const {authorization} = req.headers //gets jsonwt from headers

    //check that authorizarion exists

    if (!authorization){
        return res.status(401).json({error: "Authorization token required"})
    }

    const token = authorization.split(" ")[1] //gets second item of the array where the toekn is

    try{ 
        //verify the token has not been tampered with using the SECRET string in the environment
        const {_id}= jwt.verify(token, process.env.SECRET)

            //attaching the user attribute to the request which can be used by the routes that follow
        req.user = await User.findOne({_id}).select('_id') //puts JUST the id as the user property/attirbute
        next() //will go onto the following routes after the middlware
    }
    catch(error){
        console.log(error)
        res.status(401).json({error: 'Request not authorized'})
    }
}

module.exports = requireAuth