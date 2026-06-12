// Factorial of a Number : Iterative and Recursive
// Description:Given a number X,  print its factorial.
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
input = parseInt(input);

class Recursion {
    factorial(number) {
        if (number <= 1) {
            return 1;
        }
        return number * this.factorial(number - 1)
    }
}

const recursion = new Recursion();
console.log(recursion.factorial(input));

// Time Complexity: O(N), Since the function is being called n times, and for each function, we have only one printable line that takes O(1) time, so the cumulative time complexity would be O(N)

// Space Complexity: O(N), In the worst case, the recursion stack space would be full with all the function calls waiting to get completed and that would make it an O(N) recursion stack space.