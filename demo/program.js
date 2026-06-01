const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8'); 
console.log("Output:\n", input);