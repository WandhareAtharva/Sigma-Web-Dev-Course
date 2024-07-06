/*
The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/

function sumTillNegative(array) {
    let sum = 0;
    let x = 0;
    array.forEach(element => {
        element < 0 ? x = 1 : sum += element;
        if (x === 1)
            return sum;
    });
    return sum;
}

const array = [1, 2, 3, 4, 5, -1];

const sum = sumTillNegative(array);
console.log(sum);