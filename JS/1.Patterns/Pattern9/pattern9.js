const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 9. Diamond Star Pattern

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *


for (let row = 0; row < input; row++) {
    let rowData = "";
    let starCount = (2 * row) + 1
    for (let space = 0; space < input - (row + 1); space++) {
        rowData = `${rowData} `;
    }
    for (let column = 0; column < starCount; column++) {
        rowData = `${rowData}*`;
    }
    console.log(rowData);
}

for (let row = input - 2; row > -1; row--) {
    let rowData = "";
    let starCount = (2 * row) + 1
    for (let space = 0; space < input - row - 1; space++) {
        rowData = `${rowData} `;
    }
    for (let column = 0; column < starCount; column++) {
        rowData = `${rowData}*`;
    }
    console.log(rowData);
}