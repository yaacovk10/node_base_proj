const fs = require('fs');

// Sample data
const csvData = [
  ['Name', 'Age', 'City'],
  ['John Doe', 30, 'New York'],
  ['Jane Smith', 25, 'Los Angeles'],
  ['Bob Johnson', 35, 'Chicago'],
];

// Convert the data array to CSV format
const csvContent = csvData.map(row => row.join(',')).join('\n');

// Write the CSV content to a file (e.g., data.csv)
fs.writeFile('data.csv', csvContent, (err) => {
  if (err) throw err;
  console.log('CSV file has been created successfully.');
});
