const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 4. Number-Increasing Reverse Pyramid Pattern

// 1 2 3 4 5 6 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 


for (let row = 0; row < input; row++) {
    let rowData = "";
    let printNumber = 1;
    for (let column = 0; column < input - row; column++) {
        rowData = `${rowData}${printNumber} `;
        printNumber = printNumber + 1;
    }
    console.log(rowData);
}