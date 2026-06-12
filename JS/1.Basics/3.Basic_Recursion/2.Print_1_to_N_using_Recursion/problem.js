// Print 1 to N using Recursion
// Description: Given an integer N, write a program to print numbers from 1 to N.
const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string
input = parseInt(input);

class Recursion {
    // count start at 1 && start from 1
    printNumber1(number, count) {
        if (count > number) {
            return;
        }
        process.stdout.write(count + " ");
        this.printNumber1(number, count + 1);
    }

    // count start at n && start from 1
    printNumber2(number, count) {
        if (count <= 0) {
            return;
        }
        this.printNumber2(number, count - 1);
        process.stdout.write(count + " ");
    }

    // count start at 1 && start from n
    printNumber3(number, count) {
        if (count > number) {
            return;
        }
        process.stdout.write(number - (count - 1) + " ");
        this.printNumber3(number, count + 1);
    }
    // count start at n && start from n
    printNumber4(number, count) {
        if (count <= 0) {
            return;
        }
        process.stdout.write(count + " ");
        this.printNumber4(number, count - 1);
    }
}

const recursion = new Recursion();
recursion.printNumber1(input, 1);
process.stdout.write("\n");
recursion.printNumber2(input, input);
process.stdout.write("\n");
recursion.printNumber3(input, 1);
process.stdout.write("\n");
recursion.printNumber4(input, input);

// base condition is based on input
// print value is based on output
