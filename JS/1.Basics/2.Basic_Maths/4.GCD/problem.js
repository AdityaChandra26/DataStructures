// Find GCD of two numbers
// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.


// Example 1:
// Input: N1 = 9, N2 = 12

// Output: 3
// Explanation:
// Factors of 9: 1, 3, 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3
// Greatest common factor: 3 (GCD)

// Example 2:
// Input: N1 = 20, N2 = 15

// Output: 5
// Explanation:
// Factors of 20: 1, 2, 4, 5, 10, 20
// Factors of 15: 1, 3, 5, 15
// Common Factors: 1, 5
// Greatest common factor: 5 (GCD)

const fs = require('fs');

// Reads the entire input.txt file into a string
let input = fs.readFileSync(0, 'utf-8');
const numbers = input.trim().split(/\s+/).map(Number);

// 3. Save them into two separate variables using destructuring
let [num1, num2] = numbers;


// Solution 1
// let gcd = 1;

// for (let factorNumber = 1; factorNumber <= Math.min(num1, num2); factorNumber++) {
//     if (num1 % factorNumber === 0 && num2 % factorNumber === 0) {
//         gcd = Math.max(gcd, factorNumber);
//     }
// }
// console.log(gcd)

// Time Complexity: O(min(N1, N2)) 
// where N1 and N2 is the input number. 
// The algorithm iterates from 1 to the minimum of N1 and N2 and 
// each iteration checks whether both the numbers are divisible by the current number 
// (constant time operations).

// Space Complexity: 
// O(1)as the space complexity remains constant and independent of the input size. 
// Only a fixed amount of memory is required to store the integer variables.



// Solution 2
// let gcd = 1;

// for (let factorNumber = Math.min(num1, num2); factorNumber > 0; factorNumber--) {
//     if (num1 % factorNumber === 0 && num2 % factorNumber === 0) {
//         console.log(factorNumber);
//         break;
//     }
// }

// Time Complexity: 
// O(min(N1, N2)) where N1 and N2 is the input number. 
// The algorithm iterates from the minimum of N1 and N2 to 1 and 
// each iteration checks whether both the numbers are divisible by the current number 
// (constant time operations).

// Space Complexity: 
// O(1) as the space complexity remains constant and independent of the input size. 
// Only a fixed amount of memory is required to store the integer variables.


// Solution 3

while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
        num1 = num1 % num2;
    }
    else {
        num2 = num2 % num1;
    }
}

if (num1 === 0) {
    console.log(num2);
    return;
}
console.log(num1);






