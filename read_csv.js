const fs = require('fs');
const csv = require('csv-parser');

// Specify the CSV file path (e.g., data.csv)
const csvFilePath = 'data.csv';

// Create an array to store the parsed CSV data
const parsedData = [];

// Create a readable stream from the CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Each row is an object with column headers as keys
    parsedData.push(row);
  })
  .on('end', () => {
    // Display the parsed data
    console.log(parsedData);
  });
