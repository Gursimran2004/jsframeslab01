// Step 1: Import the 'fs' (File System) module to interact with the file system.
const fs = require('fs');

// Step 2: Use the 'readFile' method to read 'textFile.txt'.
// This method doesn't block the rest of the program from running while it reads the file.
fs.readFile('textFile.txt', 'utf8', (err, data) => {
    // Step 3: Check for any errors that might occur during the reading of the file
    if (err) {
        // Step 4: If there's an error (e.g., file not found), log the error message to the console
        console.error('Error reading file:', err);
        return; // Exit the function to prevent further actions
    }
    // Step 5: If the file is read successfully, log its contents (the 'data') to the console
    console.log(data);
});
