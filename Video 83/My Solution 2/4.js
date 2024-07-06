/*
The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
*/

function validatePassword(pass) {
    if (pass.length < 8) {
        console.log('Password is too short');
        return;
    }

    const lower = /[a-z]/;
    const upper = /[A-Z]/;
    const digit = /[\d]/;
    const special = /[^a-zA-z0-9\s]/;

    if (lower.test(pass) === true && upper.test(pass) === true && digit.test(pass) === true && special.test(pass) === true)
        console.log(`Password is Valid`);
}

password = 'Pass@123';
validatePassword(password);