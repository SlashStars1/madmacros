//The controller is where we are going to handle a majority of the data base logic 
//This will help us keep the routes files to ONLY handle routes (this is for good code organization)

const Favorite = require('../models/favoriteModel.js') //get schema


//get all favorites
const getFavorites = async(req, res)=>{
    const favorites = await Favorite.find({}).sort({food: -1})
    res.status(200).json(favorites) //sends ok status with favorites in the json body
}

//create new favorite
const createFavorite = async (req, res) =>{
    const {name, food, serving, protein, calories} = req.body //the attributes of the meal will be 
    //sent with the body

    //add doc to db
    try{
        const favorite = await Favorite.create({name, food, serving, protein, calories }) //creating a favorite using the Favorite model we imported from favoriteModel.js
        res.status(200).json(favorite); //send the object back with ok status
    }catch(error){
        res.status(400).json({error: error.message}) //sends back 400 status with message
    }
}

//delete favorite

//export this
module.exports = {
    getFavorites,
    createFavorite
}