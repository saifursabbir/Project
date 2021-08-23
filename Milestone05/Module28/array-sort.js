const number = [4, 6, 7, 1, 2, 8, 3, 5];
const sortedNumber = number.sort();
// console.log(sortedNumber);

const friends = ['sabbir', 'Rabbi', 'Shuvo', 'milad', 'Abid', 'Limon'];
// const sortFriends = friends.sort();
// console.log(sortFriends);
// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

// number sorting fun
const bigNumber = [66, 78, 58, 90, 48, 97];
const sortedBigNumber = bigNumber.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumber);
