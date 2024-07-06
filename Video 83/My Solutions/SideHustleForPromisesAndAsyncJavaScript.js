// const Promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async Task 1 is complete');
//         resolve();
//     }, 500);
// })

// Promise1.then(() => {
//     console.log('Async 1 Promise is resolved');
// });

// new Promise((resovle, reject) => {
//     setTimeout(() => {
//         console.log('Async Task 2 is complete');
//         resovle();
//     }, 1000);
// }).then(() => {
//     console.log(('Async Task 2 Promise is resovled'));
// });

// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('User Details Fetched succesfully in Promise 3');
//         const userData = { username: "Atharva", email: "atharvawandhare@gmail.com" }
//         resolve(userData);
//     }, 1500);
// });

// Promise3.then((data) => {
//     console.log('User Data Recieved from Promise 3!!');
//     console.log("User Data from Promise 3: ", data);
// });

// const Promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             console.log('User Details Fetched succesfully in Promise 4');
//             resolve({ username: "Avantika", email: "avantikawandhare@gmail.com" });
//         }
//         else
//             reject('(Prmoise 4)ERROR: Something went wrong!!!');
//     }, 2000);
// })

// Promise4.then((user) => {
//     console.log("Data from Promise 4: ", user);
//     return user.username;
// }).then((username) => {
//     console.log("Username receieved from first '.then': ", username);
// }).catch((error) => {
//     console.log(error);
// }).finally(function () {
//     console.log("The Promise is either resolved or rejected");
// });

// const Promise5 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             console.log('User Details Fetched succesfully in Promise 5');
//             resolve({ Company: "Microsoft", HQ: "USA" });
//         }
//         else
//             reject('(Prmoise 5)ERROR: JS went wrong!!!');
//     }, 2500);
// })

// async function ConsumePromise5() {
//     try {
//         const response = await Promise5;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// ConsumePromise5();

/*------------------- Method 1 to use fetch (USIGN TRYCATCH BLOCK) -------------------*/

// async function fetchUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         console.log('Data Fetched Succesfully');
//         const data = await response.json();
//         console.log('Data converted to json object format:');
//         console.log(data);
//     } catch (error) {
//         console.log("Error in fetchUsers: ", error);
//     }
// }

// fetchUsers();

/*------------------- Method 2 to use fetch (USING .then().catch().finally()) -------------------*/

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => console.log('FETCH Response: ', data))
    .catch((error) => console.log('Error: ', error))
    .finally(console.log('fetch is either resolve or rejected'));