const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
// console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'black' },
    { name: 'sticky note', price: 500, color: 'yellow' },
    { name: 'water glass', price: 3, color: 'white' },
]
const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices);

