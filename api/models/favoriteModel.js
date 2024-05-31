const mongoose = require('mongoose')

const Schema = mongoose.Schema


/*
 key={fav.Name}
              name={fav.Name}
              food={fav.Restaraunt}
              protein={fav["Protein (g)"]}
              calories={fav.Calories}
              serving={fav["Serving Size Description"]}
*/
//this will define the schema for each favorite
const favoriteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    food: {
        type: String, 
        required: true
    },
    serving: {
        type: String,
        required: false
    },
    protein: {
        type: Number,
        required: true
    },
    calories: {
        type: Number,
        required: true
    }
}, {timeStamps:true})

module.exports = mongoose.model('Favorite', favoriteSchema) //exports schema