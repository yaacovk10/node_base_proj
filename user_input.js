const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter first name
rl.question('Enter your first name: ', (firstName) => {
  // Prompt the user to enter last name
  rl.question('Enter your last name: ', (lastName) => {
    // Close the readline interface
    rl.close();

    // Create a writable stream to a file (e.g., userinfo.txt)
    const fileStream = fs.createWriteStream('userinfo.txt');

    // Write the user information to the file
    fileStream.write(`First Name: ${firstName}\n`);
    fileStream.write(`Last Name: ${lastName}\n`);

    // End the stream to ensure all data is flushed to the file
    fileStream.end();

    console.log('User information has been written to userinfo.txt');
  });
});
