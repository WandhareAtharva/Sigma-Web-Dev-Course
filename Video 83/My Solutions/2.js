/*
The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/

function DoubelTrouble(arr) {
    let newArr = [];
    arr.forEach((curr, i, array) => {
        let next = arr[i + 1];
        curr === next ? newArr.push(curr) : newArr.push(curr, curr);
    });
    return newArr;
}

function doubleTrouble(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const next = arr[i + 1];
        curr === next ? newArr.push(curr) : newArr.push(curr, curr);
    }
    return newArr;
}

const inputArray = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 14];
// const inputArray = [1, 1, 1, 1, 1];
// const inputArray = [1, 3];

let output = DoubelTrouble(inputArray);
console.log(output);