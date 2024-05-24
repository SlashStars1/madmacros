const csv = require('csv-parser') //node package to parse csv
const { getJson } = require("serpapi"); //api to search for and get an image based on a description 
const fs = require('fs') //file system package
const cors = require('cors');
const express = require('express'); //express 
const app = express();
app.use(cors());
app.use(express.json()); //ensures that app can parse JSON
const port = 5000; //Because the Frontend uses 3000 as it's default port

// variables needed for Mongo DB

const dotenv = require('dotenv');
const mongoose = require('mongoose')
//127.0.0.1/
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1/test';
const userRoutes = require('./routes/user')

dotenv.config();

//registers routes
app.use('/api/user/', userRoutes )



//put mongoose connection into async function 
async function connectDB(){
  try{
  await mongoose.connect(MONGO_URI, {
    dbName: 'Cluster0',
   
}); 
    console.log('Connected to Cluster0 database');
  }
  catch (err){
    console.error(err);
  }
}

connectDB();


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
        csvName = "panera-bread.csv";
        break;
      case "Chic Fil A":
        csvName = "chick-fil-a.csv";
        break;
      case "Chipotle":
        csvName = "chipotle.csv"
        break;
      case "Ihop":
        csvName = "ihop.csv"
        break;
      case "Jamba":
        csvName = "jamba.csv"
        break;
      case "Shake Shack":
        csvName = "shake-shack.csv"
        break;
      case "Halal Guys":
        csvName = "the-halal-guys.csv"
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


//listens to port 
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
  });


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
