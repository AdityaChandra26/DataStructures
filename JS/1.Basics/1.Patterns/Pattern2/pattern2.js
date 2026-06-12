const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 2. Number Triangle Pattern

//      1 
//     2 2 
//    3 3 3 
//   4 4 4 4 
//  5 5 5 5 5 
// 6 6 6 6 6 6 


for (let row = 0; row < input; row++) {
    let rowData = "";
    for (let space = 0; space < input - (row + 1); space++) {
        rowData = ` ${rowData}`;
    }
    for (let column = 0; column < row + 1; column++) {
        rowData = `${rowData}${row + 1} `
    }
    console.log(rowData);
}