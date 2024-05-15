

// Import the 'exec' method from Node.js 'child_process' module (child_process allows us to 
//run commands in the command line and tabula is a command line package
const { exec } = require('child_process');

// Import 'path' module to handle file paths
const path = require('path');

// Define the path to the tabula-java JAR file
const tabulaJavaPath = path.join(__dirname, 'lib', 'tabula-1.0.5-jar-with-dependencies.jar');

// Define the path to the PDF file you want to extract data from
const pdfPath = path.join(__dirname, 'Panera-Nutrition.pdf');

// Define the path where the extracted CSV output should be created and saved to
const outputPath = path.join(__dirname, 'output.csv');

// run tabula-java and extract data from the PDF
function extractPDFData() {

    // Construct the command to run tabula-java
    const command = `java -jar ${tabulaJavaPath} -p all -o ${outputPath} ${pdfPath}`;

    // Execute the command in the command line
    exec(command, (error, stdout, stderr) => {
        // Log any errors that occur during execution
        if (error) {
            console.error('Error during extraction:', error);
            return;
        }

        // Log the standard output from the command
        console.log('Extraction stdout:', stdout);

        // Log any standard error output from the command (usually warnings)
        console.error('Extraction stderr:', stderr);

        // Confirmation that the process is complete and where the output is saved
        console.log(`Data extracted and saved to: ${outputPath}`);
    });
}

// Run the function to extract PDF data
extractPDFData();
