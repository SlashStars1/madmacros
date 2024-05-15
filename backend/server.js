
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

// Define the path to the csv file you want to extract data from
//const csvPath = path.join(__dirname, 'panera-bread.csv');

//Function that will parse a given csv for protein, cals, and name
function parsecsvFile(csvPath){
    fs.createReadStream(csvPath)
  
  .pipe(csv({
    mapHeaders: ({ header, index }) => {
      // Column headers to keep 
      if (header === 'Name' || header === 'Serving Size Description' || header === 'Calories' ||header === 'Protein (g)') {
        return header;
      }
      return null;  // will ignore header if it's not in my if statement
    }
  }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
   
  });
}
parsecsvFile('panera-bread.csv')