// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);
// console.log(number % 2 == 0);


function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', isMyNumberEven);

// is odd function

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}
const myNum = 2689;
const isMyNumOdd = isOdd(myNum);
console.log('is my number odd', isMyNumOdd);

const herNum = 3269;
const isHerNumOdd = isOdd(herNum);
console.log('is her number odd', isHerNumOdd);
