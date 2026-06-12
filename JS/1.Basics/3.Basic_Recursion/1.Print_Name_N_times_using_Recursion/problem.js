// Print Name N times using Recursion
// Description: Given an integer N, write a program to print your name N times.
class Recursion {
    printName(name, number, count = 0) {
        if (number === count) {
            return;
        }
        this.printName(name, number, count + 1);
        console.log(name, count + 1);
    }

}


const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
let [name, number] = input.trim().split(/\s+/);
number = parseInt(number);

const recursion = new Recursion();
recursion.printName(name, number);

// Complexity Analysis
// Time Complexity: O(N), we print our name exactly N times.
// Space Complexity: O(N), stack space used for recursive calls.




