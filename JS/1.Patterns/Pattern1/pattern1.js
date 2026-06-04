const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 1. Square Hollow Pattern

// ******
// *    *
// *    *
// *    *
// *    *
// ******


for (let row = 0; row < input; row++) {
    let rowData = "";
    for (let column = 0; column < input; column++) {
        if (row === 0
            || row === input - 1
            || column === 0
            || column === input - 1
        ) {
            rowData = `${rowData}*`
        }
        else{
            rowData = `${rowData} `
        }
    }
    console.log(rowData);
    console.log();
}