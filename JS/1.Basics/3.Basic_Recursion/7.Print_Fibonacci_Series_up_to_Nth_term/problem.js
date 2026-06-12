// Print Fibonacci Series up to Nth term
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
input = parseInt(input);

class Recursion {
    fibonacci(number) {
        if (number === 1) {
            return 1;
        }
        if (number === 0) {
            return 0;
        }
        return this.fibonacci(number - 1) + this.fibonacci(number - 2);

    }
}

const recursion = new Recursion();

for (let i = 0; i <= input; i++) {
    console.log(recursion.fibonacci(i));

}
