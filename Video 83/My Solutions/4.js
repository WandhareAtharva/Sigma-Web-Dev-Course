/*
The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/

function hasUpperCase(str) {
    return [...str].some(char => /[A-Z]/.test(char));
}
function hasLowerCase(str) {
    return [...str].some(char => /[a-z]/.test(char));
}
function hasSpecialCharacter(str) {
    return [...str].some(char => /[^\w\s]/.test(char));
}
function hasNumber(str) {
    return [...str].some(char => /\d/.test(char));
}

function validator(str) {
    if (str.length >= 8)
        if (hasUpperCase(str) === true && hasLowerCase(str) === true && hasSpecialCharacter(str) === true && hasNumber(str) === true)
            return true;
    return false;
}

const password = "Pass@123";
const validate = validator(password);
console.log(validate);