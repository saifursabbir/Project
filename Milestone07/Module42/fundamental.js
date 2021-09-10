// 1. How to declare a variable using let and const 
const fatherName = '';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic condition: >, <, ===, !===, <=, >=
// multiple condition: &&, ||

if (fatherName === '' || season === '') {

}
else if (fatherName === 'arnold') {

} else {

}
// 3. array
// index
// length, push,
const numbers = [56, 78, 90, 55, 70];
numbers[0] = 56;


// 4. loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}


// 5. function 
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(67, 90);

// 6. Object
const student = {
    name: 'salif Khan',
    age: 32,
    movies: ['king khan', 'Dhaka Mastan']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student[age]); // access via property name string
console.log(student[myVariable]); // Access via property name in a variable


