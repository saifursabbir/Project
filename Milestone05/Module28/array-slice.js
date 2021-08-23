const number = [3, 5, 8, 9, 12, 15, 19, 21, 35, 78];
const numberSliced = number.slice(3, 7);
// console.log(numberSliced);
// console.log(number);

// splice to remove an element from an array.
// const numberSpliced = number.splice(4, 2);
// console.log(numberSliced);
// console.log(number)

//  
const numberSliced2 = number.splice(4, 3, 456, 212, 998, 21, 35, 87);
console.log(numberSliced2);
console.log(number);