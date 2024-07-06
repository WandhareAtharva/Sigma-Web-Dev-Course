// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

randomTime = () => Math.floor(Math.random() * 3000) + 2000;

async function placeorder() {
    var order = new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() < 0.8) resolve('Your Order is comfirmed');
        else reject('Something unexpected occured!! We will refund you as soon as possible!!');

    }, randomTime()))
        .then((message) => {
            console.log(message);
        })
        .catch((message) => {
            console.log(message);
        })
}

placeorder();