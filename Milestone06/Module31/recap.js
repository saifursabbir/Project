// 1.let and const 
const hubby = 'Omor Sani';
let phone = 'iphone12 Pro max';
phone = 'Samsung Galaxy S17';
// 2.Default parameter
// 5. spread or three dots(...)
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
};
const biggest = maxNumber();
console.log(biggest);

// 3.tempalte string 
const myNotes = `
    I am mojnu of ${hubby}. I have a ${phone}.
`
console.log(myNotes);

// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));