/*
The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
*/

function countVowels(s) {
    let count = 0;
    for (const char of s) {
        if (char === 'A' || char === 'a' || char === 'e' || char === 'E' || char === 'i' || char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U')
            ++count;
    }
    console.log(`Total vowels in ${s}: ${count}`);
}

const string = "education";

countVowels(string);