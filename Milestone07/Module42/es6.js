const numbers = [56, 78, 90, 55, 70];
const student = {
    name: 'salif Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mastan']
}
// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} aslo liked movies ${student.movies[0]}`;
console.log(about)

// 2. arrow function
// 2.1
const getFiftyFive = () => 55;
// 2.2
const addSixtyFive = num => num + 65;
// 2.3
const iSEven = x => x % 2 == 0;
// 2.4
const addThree = (x, y, z) => x + y + z;
// 2.5
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum;
}

//  3.spread operator
const newNumbers = [...numbers];
numbers.push(99);
// create a new array from an older array and add an element 
const currentNumbers = [...numbers, 55]

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

