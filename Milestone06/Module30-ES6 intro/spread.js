const numbers = [23, 45, 67, 89, 50];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

// const numbers2 = numbers;
const numbers2 = [...numbers];
numbers.push(55);
// console.log(numbers);
// console.log(numbers2);

const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
console.log(newCars)
