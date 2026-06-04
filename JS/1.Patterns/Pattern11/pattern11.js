const fs = require('fs');

// Reads the entire input.txt file into a string
const input = fs.readFileSync(0, 'utf-8');

// 10. Butterfly Star Pattern

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *


for (let row = 1; row <= input; row++) {
    let rowData = "";
    for (let star = 0; star < row; star++) {
        rowData = `${rowData}*`;
    }
    for (let space = 0; space < (2 * (input - row)); space++) {
        rowData = `${rowData} `;
    }
    for (let star = 0; star < row; star++) {
        rowData = `${rowData}*`;
    }
    console.log(rowData);
}

for (let row = input; row > 0; row--) {
    let rowData = "";
    for (let star = 0; star < row; star++) {
        rowData = `${rowData}*`;
    }
    for (let space = 0; space < (2 * (input - row)); space++) {
        rowData = `${rowData} `;
    }
    for (let star = 0; star < row; star++) {
        rowData = `${rowData}*`;
    }
    console.log(rowData);
}