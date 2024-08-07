//  Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

function rotateRight(str) {
    let pop = str.split("").pop();
    let rotated = pop + str.slice(0, str.length - 1);
    return rotated;
}

let string = '123456';

let rotated = rotateRight(string);
console.log(rotated);