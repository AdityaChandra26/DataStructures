// Count frequency of each element in the array
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
let array = JSON.parse(input);

// let hashArray = [];
// hashArray.fill(0);

// array.forEach((n) => {
//     hashArray[n] = (hashArray[n] ?? 0) + 1
// })

// hashArray.forEach((n,index) => {
//     console.log(index,n)
// })

let hash = new Map();

array.forEach((n) => {
    hash.set(n, (hash.get(n) ?? 0) + 1);
});

hash.forEach((value, key) => {
    console.log(key, value);
})
