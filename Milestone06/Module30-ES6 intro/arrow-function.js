// function declaration
function add(num1, num2) {
    return num1 + num2;
};
// function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
};
// function expression (annonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
};
// arrow function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(15, 17);
const sum2 = add2(30, 20);
const sum3 = add3(40, 60);
const sum4 = add4(50, 60);
console.log(sum1, sum2, sum3, sum4);
