/*
The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/

function mirror(string) {
    // return string.split("").reverse().reduce((accumulator, current) => accumulator + current, "");
    return string.split("").reverse().join("");
}

const string = `stressed`;

const reversed = mirror(string);
console.log(reversed);