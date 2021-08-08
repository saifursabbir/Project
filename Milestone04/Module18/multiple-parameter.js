function addTowNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
    // console.log(number2);
}
var firstNumber = 35;
var secondNumber = 47;
var result = addTowNumbers(secondNumber, firstNumber);
console.log('result value: ', result);


//
function multiplyTowNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTowNumbers(5, 100);
console.log('total after multiplication', total);
//
function biyogTowNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}

var total = biyogTowNumbers(50, 25);
console.log('total', total);
//
function vagTowNumbers(num1, num2) {
    var result = num1 / num2;
    return result;
}

var total = vagTowNumbers(10, 2);
console.log('total', total);