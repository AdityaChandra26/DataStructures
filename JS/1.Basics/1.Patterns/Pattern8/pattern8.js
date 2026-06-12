const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 8. Rhombus Pattern

//      ******
//     ******
//    ******
//   ******
//  ******
// ******

for (let row = 0; row < input; row++) {
    let rowData = "";
    for (let space = 0; space < input - (row + 1); space++) {
        rowData = `${rowData} `;
    }
    for (let column = 0; column < input; column++) {
        rowData = `${rowData}*`;
    }
    console.log(rowData);
}