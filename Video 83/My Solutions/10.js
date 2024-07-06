// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

randomTime = () => Math.floor(Math.random() * 3000) + 2000;

async function BrewCoffee(coffee) {
    var order = new Promise((resolve, reject) => setTimeout(() => {
        if (Math.random() < 0.8) resolve(coffee);
        else reject(`Sorry, we are our of stock for ${coffee}.`);
    }, randomTime()))
        .then((coffee) => {
            console.log(`Your order for ${coffee} is confirmed!!`);
        })
        .catch((message) => {
            console.log(message);
        })
}

BrewCoffee('Cold Coffee');