// variable 
var deposit = 400;
// condition 
if (deposit > 500) { }
else if (deposit < 200) { }
else if (deposit == 500) { }
else if (deposit != 500) { }
else if (deposit >= 600) { }
else if (deposit <= 400) { }
else { }
// array
const numbers = [45, 6450, 124, 45, 1, 365];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;
// check whether 222 included in the array
if (numbers.indexOf(222) != -1) { }
if (numbers.includes(222)) { }
// loop
// while, for
for (const number of numbers) { }
// function
function fullName(first, second) {
    const name = first + ' ' + second;
}
const person = fullName('Rahim', 'ali');
// Object
const bottle = { color: 'yellow', contain: 'weter', price: '600' }