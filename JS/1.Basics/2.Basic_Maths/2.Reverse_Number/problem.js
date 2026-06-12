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



let reverse = 0;

while (input) {
    reverse = (reverse * 10) + (input % 10);
    input = parseInt(input / 10);
}
console.log(reverse);




