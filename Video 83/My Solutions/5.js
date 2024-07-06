/*
The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
*/

function sumTillNegative(array) {
    let arr = new Array();
    let x = 0
    array.forEach(element => {
        if (element > 0 && x === 0)
            arr.push(element);
        else
            x = 1;

    });
    return arr.reduce((a, curr) => a + curr, 0);
}

const array = new Array(1, 2, 3, 4, 5, -1, 6);

let sum = sumTillNegative(array);
console.log(sum);