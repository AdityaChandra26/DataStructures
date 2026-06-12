// Sum of first N Natural Numbers
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
input = parseInt(input);


class Recursion {
    sum(number) {
        if (number <= 1) {
            return 1;
        }
        return number + this.sum(number - 1);
    }

    sum2(number, sum) {
        if (number <= 1) {
            return 1;
        }
        sum = number + this.sum2(number - 1, sum);
        return sum;
    }
}

const recursion = new Recursion()
// console.log(recursion.sum(input));
console.log(recursion.sum2(input, 0));