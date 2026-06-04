const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 5. Number-Changing Pyramid Pattern

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 
// 16 17 18 19 20 21


let printNumber = 1;
for (let row = 0; row < input; row++) {
    let rowData = "";
    for (let column = 0; column < row + 1; column++) {
        rowData = `${rowData}${printNumber} `;
        printNumber = printNumber + 1;
    }
    console.log(rowData);
}