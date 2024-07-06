// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const random = () => Math.floor(Math.random() * 3000) + 2000;

async function brewCoffee(coffee) {
    new Promise(resolve => setTimeout(() => resolve(`Your order for ${coffee} is confirmed`), random()))
        .then(message => console.log(message));
}

brewCoffee('Cold Coffee');