
require('dotenv').config()

const csv = require('csv-parser') //node package to parse csv
const fs = require('fs') //file system package
const cors = require('cors');
const express = require('express'); //express 

//gets the routes from favorites.js
const favoriteRoutes = require('./routes/favorites')

const userRoutes = require('./routes/user')

const app = express();

const mongoose = require('mongoose')



//middlware that will pass attirbutes of the request to it
app.use(express.json())


// Use CORS middleware
app.use(cors({
  origin: ['https://madmacros.vercel.app', 'http://localhost:3000'] // Allows GET requests from frontend domain
}));

const port = process.env.PORT || 5000; 


app.get('/submit',  async (req, res) => {
  try {
    //prints out the request query parameters
    console.log("protein: " + req.query.protein)
    console.log("cals: " + req.query.cals)
    console.log("food: " + req.query.food)
    let array;
    let csvName;

    switch (req.query.food){
      case "Panera Bread": 
        csvName = "api//panera-bread.csv";
        break;
      case "Chic Fil A":
        csvName = "api//chick-fil-a.csv";
        break;
      case "Chipotle":
        csvName = "api//chipotle.csv" 
        break;
      case "Ihop":
        csvName = "api//ihop.csv"
        break;
      case "Jamba":
        csvName ="api//jamba.csv"
        break;
      case "Shake Shack":
        csvName = "api//shake-shack.csv"
        break;
      case "Halal Guys":
        csvName = "api//the-halal-guys.csv"
        break;
    }
    array = await parsecsvFile(csvName, Number(req.query.cals), Number(req.query.protein))

    res.type('json')
    res.json(array)
   }
   catch (error) {
    console.error("Error processing CSV file:", error);
    res.status(500).send("Failed to process CSV file");
  }
  
 
 } 
  
  );


  //grabs all routes attached to the favoriteRoutes and attaches to app
app.use('/api/favorites', favoriteRoutes) 
//grabs all routes attached to the user Routes and attaches to app
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(port, ()=>{
            console.log('connected to db & listening on port', port)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


//exports app for Vercel 
  module.exports = app;

//Function that will parse a given csv for protein, cals, and name
function parsecsvFile(csvPath, cals, protein){
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(csvPath)
  .pipe(csv({
    mapHeaders: ({ header}) => {
      // Column headers to keep 
      if (header === 'Name' || header === 'Serving Size Description' || header === 'Calories' ||header === 'Protein (g)') {
        return header;
      }
      return null;  // will ignore header if it's not in my if statement
    }
  }))
  .on('data', (data) => {
    //pushes only the objects from data that matches the cals and protein into the array
    //Number() is used to format the string into a number
    //note that to access the Protein we have to use quotes because of the spaces 
    
    if (Number(data.Calories) <= cals && Number(data['Protein (g)']) >= protein) {
   
      results.push(data); 
    }}

) 
.on('end',()=>{
  resolve(results);
})
  
  .on('error', (error) => {
    reject(error);
});
});
}
