const numbers = [5, 13, 7, 41, 30, 20, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers, smallNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'black' },
    { name: 'Smart Watch', price: 3000, color: 'yellow' },
    { name: 'Sticky note', price: 50, color: 'black' },
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive)
const blacks = products.filter(product => product.color == 'black');
// console.log(blacks);

// finddd
const whiteItem = products.find(product => product.color == 'black')
console.log(whiteItem);