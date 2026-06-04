const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 6. Zero - One Triangle Pattern

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// 0 1 0 1 0 1


let printNumber = 1;
for (let row = 0; row < input; row++) {
    let rowData = "";
    if (row % 2 == 0) {
        printNumber = 1;
    }
    for (let column = 0; column < row + 1; column++) {
        rowData = `${rowData}${printNumber} `;
        printNumber = printNumber === 1 ? 0 : 1;
    }
    console.log(rowData);
}