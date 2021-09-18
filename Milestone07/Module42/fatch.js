// 1. JSON

const student = {
    name: 'salif Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mastan']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fatcch

fetch('url')
    .then(res => reson())
    .then(data => console.log(data));

// 3. keys, values
const keys = Object.keys(student)
const values = Object.values(student);

// for 
const numbers = [34, 78, 80, 90];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// for in on object using for in


// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'hp', color: 'silver' },
    { name: 'phone', price: 30000, brand: 'Apple', color: 'Golden' },
    { name: 'watch', price: 5000, brand: 'casio', color: 'whate' },
    { name: 'sungalss', price: 6000, brand: 'ray', color: 'Black' },
    { name: 'camera', price: 48000, brand: 'canon', color: 'gray' },
]

const newProducts = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products add then add newProcuts 

const newProcuts = [...products, newProducts];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');

