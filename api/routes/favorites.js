
//we don't have access to the app here so we are going to use express
const express = require('express')

//get controllers
const  {getFavorites, createFavorite, deleteFavorite} = require('../controllers/favoriteController')

const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth) //will find the middlware function that authenticates the user BEFORE letting user go forward to any routes

//ALL the different request handlers we're adding to the router:

//GET all favorites  would need to do /api/favorites/ to get this route NOT just /
router.get('/', getFavorites)


//POST (or add) a new favorites
router.post('/', createFavorite)

//DELETE a favorite
router.delete('/:id', deleteFavorite)


module.exports = router; //export router for use in server