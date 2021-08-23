const anthem = 'amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA)

// slice
const smailSlice = anthem.slice(5, 13);
console.log(smailSlice);

// substr
const anotherPart = anthem.substr(11, 8);
console.log(anotherPart);

// subString 
const anotherAnotherPart = anthem.substring(11, 15)
console.log(anotherAnotherPart);

// concat
const first = 'Amader';
const second = 'City';
const fullString = first + second;
const fullString1 = first.concat(second).concat('abc').concat('srsabbir')
console.log(fullString, fullString1);

// 
const words1 = ['a', 'b', 'c', 'd'];
// const allJoined = words1.join('');
// const allJoined = words1.join(' ');
// const allJoined = words1.join(', ');
const allJoined = words1.join('WWW');
console.log(allJoined);