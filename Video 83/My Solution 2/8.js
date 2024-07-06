// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function asyncArrayMap(array) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return array.map(value => value * 2);
}

async function main() {
    const array = new Array(1, 3, 5, 7, 9);
    const newArray = await asyncArrayMap(array);
    console.log(newArray);
}

main();