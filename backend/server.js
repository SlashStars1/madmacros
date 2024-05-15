
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

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
  
}

//function call
parsecsvFile('panera-bread.csv', 400, 20)
