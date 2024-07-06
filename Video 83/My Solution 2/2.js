/*
The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
*/

function double(list) {

    let doubleList = [];
    for (let i = 0; i < list.length - 1; i++) {
        const e1 = list[i];
        const e2 = list[i + 1];
        e1 === e2 ? doubleList.push(e1) : doubleList.push(e1, e1);
    }

    return doubleList;
}

const inputArray = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 14];
// const inputArray = [1, 1, 1, 1, 1];
// const inputArray = [1, 3];

let doubleArray = double(inputArray);
console.log(doubleArray);