// Count digits in a number

// Problem Statement: Given an integer N, return the number of digits in N.

// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.

// Example 2:
// Input:N = 7789              
// Output: 4
// Explanation: The number 7789 has 4 digits.


const fs = require('fs');

// Reads the entire input.txt file into a string
let input = fs.readFileSync(0, 'utf-8');



// Solution 1
// let count = 0;
// while (input > 0) {
//     input = parseInt(input / 10);
//     count = count + 1;
// }
// console.log(count);

// Solution 1 Analysis
// Time Complexity: O(log10N + 1), where N is the input number. 
// The time complexity is determined by the number of digits in the input integer N. 
// In the worst case when N is a multiple of 10 the number of digits in N is log10N + 1.

// In the while loop we divide N by 10 until it becomes 0 which takes log10N iterations.
// In each iteration of the while loop we perform constant time operations like division and increment the counter.
// Space Complexity : O(1), as only a constant amount of additional memory for the counter regardless of size of the input number.


// When ever you divide by number, time complexity will be logarithmic. If divided by 10, It will be log10

// Solution 2
console.log(parseInt(Math.log10(input) + 1))




