// Reverse Digits of A Number

// Problem Statement: Given an integer N return the reverse of the given number.
// Note: If a number has trailing zeros, then its reverse will not include them. 
// For e.g , reverse of 10400 will be 401 instead of 00401.

// Input: N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.

// Input: N = 7789                
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.


const fs = require('fs');

// Reads the entire input.txt file into a string
let input = fs.readFileSync(0, 'utf-8');
input = parseInt(input);


if (input < 0) {
    console.log(false);
    return;
}

let reverse = 0;
let clone = input;


while (clone > 0) {
    reverse = (reverse * 10) + (clone % 10);
    clone = Math.floor(clone / 10);
}

console.log(reverse === input);




