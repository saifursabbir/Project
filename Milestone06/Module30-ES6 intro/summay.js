let priyoPerson = 'koolsum Begum';
priyoPerson = 'Momotaj Begum';
const hubby = 'Akbar the great';

//Default parameter
function getName(first, last = 'Chowdury') {
    return first + ' ' + last;
};

// template string 
const myPeople = `My lovely person is are ${hubby} and his fullName is ${getName('akbar')}. My name is ${priyoPerson}.`
console.log(myPeople);

// arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrow = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdpart = x / z;
    const result = (firstPart + secondPart) * thirdpart;
    return result;
}
const numbers = [2, 31, 45, 99]
const min = Math.min(...numbers);