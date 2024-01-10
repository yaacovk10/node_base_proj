const fs = require('fs');

// Create a writable stream to a text file (e.g., numbers.txt)
const fileStream = fs.createWriteStream('numbers.txt');

// Loop from 1 to 10 and write each number to the file
for (let i = 1; i <= 10; i++) {
  fileStream.write(`${i}\n`);
}

// End the stream to ensure all data is flushed to the file
fileStream.end();

console.log('Numbers have been written to numbers.txt');

