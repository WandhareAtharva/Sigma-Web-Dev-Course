// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const calculateTotal = (products) => products.reduce((a, c) => a += c.price, 0);

const products = [
    {
        id: 1,
        name: "Coffee Maker",
        price: 39.99,
        imageUrl: "https://example.com/coffee-maker.jpg",
        description: "Brew your favorite coffee at home with this convenient coffee maker."
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: 129.95,
        imageUrl: "https://example.com/wireless-headphones.jpg",
        description: "Enjoy crystal clear audio without the hassle of wires with these wireless headphones."
    },
    {
        id: 3,
        name: "Fitness Tracker",
        price: 79.99,
        imageUrl: "https://example.com/fitness-tracker.jpg",
        description: "Track your steps, heart rate, and more with this stylish fitness tracker."
    },
    {
        id: 4,
        name: "Laptop Backpack",
        price: 44.50,
        imageUrl: "https://example.com/laptop-backpack.jpg",
        description: "Carry your laptop and essentials comfortably with this spacious backpack."
    },
    {
        id: 5,
        name: "Smart Speaker",
        price: 99.00,
        imageUrl: "https://example.com/smart-speaker.jpg",
        description: "Control your smart home devices and enjoy music with this voice-activated smart speaker."
    }
];

const totalPrice = calculateTotal(products);
console.log(totalPrice);