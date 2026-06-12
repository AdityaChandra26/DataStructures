// Check if a number is Armstrong Number or not
// Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.


// Example 1:
// Input:N = 153
// Output:True
// Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

// Example 2:
// Input:N = 371                
// Output: True
// Explanation: 3^3+7^3+1^3 = 27 + 343 + 1 = 371
const fs = require('fs');

// Reads the entire input.txt file into a string
let input = fs.readFileSync(0, 'utf-8');
input = parseInt(input);

let clone = input;
let sum = 0;
let digitLength = input.toString().length;

while (clone > 0) {
    sum = sum + Math.pow(Math.floor(clone % 10), digitLength);
    clone = Math.floor(clone / 10);
}

console.log(sum===input)


// Complexity Analysis
// Time Complexity: O(log10N + 1) where N is the input number. 
// The time complexity is determined by the number of digits in the input integer N. 
// In the worst case when N is a multiple of 10 the number of digits in N is log10 N + 1.

// Space Complexity: O(1) as only a constant amount of additional memory for the reversed number 
// regardless of size of the input number.









