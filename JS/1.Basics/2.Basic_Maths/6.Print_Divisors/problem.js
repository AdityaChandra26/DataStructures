// Print all Divisors of a given Number
// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. 
// In other words, if N is divisible by another integer without any remainder, 
// then that integer is considered a divisor of N.


// Input: N = 36
// Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]  
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
// Input: N = 12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.

const fs = require('fs');

// Reads the entire input.txt file into a string
let input = fs.readFileSync(0, 'utf-8');
input = parseInt(input);

const divisors = []


// Solution 1
// for (let factorNumber = 1; factorNumber <= input; factorNumber++) {
//     if (input % factorNumber === 0) {
//         divisors.push(factorNumber);
//     }
// }
// console.log(divisors);

// Solution 2
for (let factorNumber = 1; factorNumber <= Math.sqrt(input); factorNumber++) {
    if (input % factorNumber === 0) {
        divisors.push(factorNumber);
        if (factorNumber != (input / factorNumber)) {
            divisors.push(input / factorNumber);
        }
    }
}
console.log(divisors.sort((a, b) => a - b));












