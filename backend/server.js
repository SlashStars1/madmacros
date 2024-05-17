

const csv = require('csv-parser') //node package to parse csv
const fs = require('fs') //file system package
const results = []; //array to store our objects in the format: {Name: , Serving Size Description: , Calories: , Protein (g): }
const cors = require('cors');


const express = require('express'); //express 
const app = express();
app.use(cors());
const port = 5000; //Because the Frontend uses 3000 as it's default port


//TO DO: Method to handle form submission request 


//listens to port 
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
  });


//Function that will parse a given csv for protein, cals, and name
function parsecsvFile(csvPath, cals, protein){
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
    console.log(results);
   console.log("success");
     
  });
  return results
}

//function call
//parsecsvFile('panera-bread.csv', 400, 20)

app.get('/', (req, res) => {

    const results = parsecsvFile('panera-bread.csv', 400, 20)
    res.type('text')
    res.format({
        text: function () {
         res.send( results)
          //res.send('Hello from the Node.js backend!');
        }
      })
    
  
});
