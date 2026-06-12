// Reverse a given Array
// Description: 
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
input = JSON.parse(input);


class Recursion {
    reverse(array, number) {
        if (number > (array.length / 2)) {
            return array;
        }
        const clone = array[number];
        array[number] = array[array.length - 1 - number];
        array[array.length - 1 - number] = clone;
        return this.reverse(array, number + 1);
    }
}

const recursion = new Recursion();
console.log(recursion.reverse(input, 0));

