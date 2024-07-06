/*
The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/

function countVowels(string) {
    const vowelRegex = /[aeiou]/i;
    let count = 0;
    string.toLowerCase().split("").reduce((p, c) => vowelRegex.test(c) ? ++count : count);
    console.log(count);
}

let string = 'MathEmAticS';
countVowels(string);