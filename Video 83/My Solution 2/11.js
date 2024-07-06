// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const filterProducts = (products) => products.filter((value) => value.id % 2 !== 0);

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

const filterProductArray = filterProducts(products);
console.log(filterProductArray);