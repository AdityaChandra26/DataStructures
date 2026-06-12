const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 7. Palindrome Triangle Pattern

//           1 
//         2 1 2 
//       3 2 1 2 3 
//     4 3 2 1 2 3 4 
//   5 4 3 2 1 2 3 4 5 
// 6 5 4 3 2 1 2 3 4 5 6 

for (let row = 0; row < input; row++) {
    let rowData = "";
    for (let space = 0; space < input - (row + 1); space++) {
        rowData = `${rowData}  `;
    }
    let printNumber = row + 1;
    for (let column = 0; column < row + 1; column++) {
        rowData = `${rowData}${printNumber} `;
        printNumber = printNumber - 1;
    }
    printNumber = printNumber + 2;
    for (let column = 0; column < row; column++) {
        rowData = `${rowData}${printNumber} `;
        printNumber = printNumber + 1;
    }
    console.log(rowData);
}