//The controller is where we are going to handle a majority of the data base logic 
//This will help us keep the routes files to ONLY handle routes (this is for good code organization)

const Favorite = require('../models/favoriteModel.js') //get schema

const mongoose = require ('mongoose') //get mongoose (we're using this to make sure the id is valid)

//get all favorites
const getFavorites = async(req, res)=>{
    const user_id = req.user._id; //grabs user id from request body
    const favorites = await Favorite.find({user_id}).sort({food: -1}) //gets all favorits associated with user id sort by restaraunt aka food
    res.status(200).json(favorites) //sends ok status with favorites in the json body
}

//create new favorite
const createFavorite = async (req, res) =>{
    
    const {name, food, serving, protein, calories} = req.body //the attributes of the meal will be 
    //sent with the body

    //add doc to db
    try{


        const user_id = req.user._id; //grab the user id from the request that we had attached in the requireAuth middlware 
        console.log("id:", user_id) 
        // Check if the favorite already exists
    const existingFavorite = await Favorite.findOne({ user_id, name, food, serving, protein, calories,});

    if (existingFavorite) {
      return res.status(400).json({ error: 'Favorite already in db' });
    }

        const favorite = await Favorite.create({name, food, serving, protein, calories, user_id }) //creating a favorite using the Favorite model we imported from favoriteModel.js
        res.status(200).json(favorite); //send the object back with ok status
    }catch(error){
        res.status(400).json({error: error.message}) //sends back 400 status with message
    }
}

//delete favorite
const deleteFavorite = async (req, res)=>{
    
    const {id} = req.params //grab the favorite meal id from the request parameters

    //checks that it's a valid monggoose id. if not returns error 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "No such favorite"})
    }

    const favorite = await Favorite.findOneAndDelete({_id: id})

    
    if (!favorite){ //if favorite doesn't exist in db return 404 error
        return res.status(404).json({error: "No such favorite"})
    }

    //sends the deleted favorite with OK status 
    res.status(200).json(favorite)
}

//export this
module.exports = {
    getFavorites,
    createFavorite,
    deleteFavorite
}