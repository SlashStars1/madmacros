const csv = require('csv-parser') //node package to parse csv
const fs = require('fs') //file system package
const cors = require('cors');
const express = require('express'); //express 
const app = express();
app.use(cors());
const port = 5000; //Because the Frontend uses 3000 as it's default port


app.get('/',  async (req, res) => {
  try {
    //prints out the request query parameters
    console.log("protein: " + req.query.protein)
    console.log("cals: " + req.query.cals)
    console.log("food: " + req.query.food)
    let array;
    if (req.query.food==="Panera Bread"){
      array = await parsecsvFile('panera-bread.csv', Number(req.query.cals), Number(req.query.protein))
      console.log("finished")

      
    console.log(array)
    //const array = await parsecsvFile('panera-bread.csv', 300, 10)
    res.type('json')
    res.format({
       json: function () {
         res.send(array);
        }
      })
    }

  }
  catch (error){
    console.error("Error processing CSV file:", error);
    res.status(500).send("Failed to process CSV file");
  }
 

});


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
  .on('end', () => {
    resolve(results);
   console.log("success");
  })
  .on('error', (error) => {
    reject(error);
});
});
}

