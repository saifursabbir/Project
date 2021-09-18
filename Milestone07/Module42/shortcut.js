// 'almas', 5, true, {}, []
// '', 0, false, null, undefined

// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

// check false
let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) {

}

// check thuthy & false shortcut
const money = 880;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit'
}
// ternary 
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1)
// multipaly ternary
let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + ' ';
// console.log(numStr);

// string to number
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide User');
// Shortcut
isActive ? showUser() : hideUser();
// more shortcut
// use || if the left side is false then right side will be executed 
isActive && hideUser();

// toggle boolean
isActive = !isActive;

