function addNumbers(num1, num2) {
    // console.log(arguments[3]);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    };
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(34, 6, 500, 900);
// console.log(sum);

//
function getFullName() {
    let fullName = ' ';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
};
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket');
console.log(name);

