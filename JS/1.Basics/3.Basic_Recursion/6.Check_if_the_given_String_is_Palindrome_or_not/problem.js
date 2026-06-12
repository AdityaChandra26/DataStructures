// Check if the given String is Palindrome or not
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string


class Recursion {
    palindrome(string, index) {
        if (index > (string.length / 2)) {
            return true;
        }
        if (string[index] != string[string.length - 1 - index]) {
            return false;
        }
        return this.palindrome(string, index + 1);
    }
}

const recursion = new Recursion();
console.log(recursion.palindrome(input, 0));
