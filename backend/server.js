
//file system
const fs = require('fs')

//pdf parser
const pdf= require('pdf-parse');

let dataBuffer = fs.readFileSync('qdoba-nutrition-information.pdf');
 
pdf(dataBuffer).then(function(data) {

    // number of pages
    console.log(data.numpages);
    const lines = data.text.split(/\n/)
   
    //temporary placeholders for cals:
    const cal = 300;

    lines.forEach((line, index) => {
        if (!line.includes("Calories (kcal)")){
            console.log(`Line ${index + 1}: ${line}`);
            
        }
      
    });
        
});
