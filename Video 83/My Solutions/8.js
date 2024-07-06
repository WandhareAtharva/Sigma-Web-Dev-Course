// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function double(array) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return array.map(value => value * 2);
}

async function main() {
    const array = new Array(1, 2, 3, 4, 5);
    const doubleOfArray = await double(array);
    console.log(doubleOfArray);
}

main();

// (async function main() {
//     var array = new Array(1, 2, 3, 4, 5);
//     const doubleOfArray = await double(array);
//     console.log(doubleOfArray);
// })();