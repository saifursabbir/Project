const products = [
    { name: 'laptop', price: 32000, brand: 'hp', color: 'silver' },
    { name: 'phone', price: 30000, brand: 'Apple', color: 'Golden' },
    { name: 'watch', price: 5000, brand: 'casio', color: 'whate' },
    { name: 'sungalss', price: 6000, brand: 'ray', color: 'Black' },
    { name: 'camera', price: 48000, brand: 'canon', color: 'gray' },
]
// 1.
const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices)

// 2.
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price < 10000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);

// 4. find 
const special = products.find(product => product.name.includes('n'));
// console.log(special);