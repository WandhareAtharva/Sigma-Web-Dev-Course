/*
The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
*/

const mirror = (string => string.split("").reverse().join(""))

const string = "stressed";

const mirrorString = mirror(string);
console.log(`Original String: ${string} \nMirror Image of String: ${mirrorString}`);