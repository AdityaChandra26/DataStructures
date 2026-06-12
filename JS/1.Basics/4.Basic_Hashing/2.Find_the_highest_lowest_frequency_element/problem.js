// Find the highest_lowest frequency element
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
let array = JSON.parse(input);

let hash = new Map();


array.forEach((n) => {
    hash.set(n, (hash.get(n) ?? 0) + 1);
})
const sorted = Array.from(hash.entries()).sort((v1, v2) => v1[1] - v2[1])
console.log('highest', sorted[sorted.length - 1][0])
console.log('lowest', sorted[0][0])