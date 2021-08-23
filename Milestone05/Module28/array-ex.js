function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please Provide an array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;;
        }
    }
    return mega;
}

const friends = ['kutub', 'Limon', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(1234);
// console.log(myBigBuddy);

if (friends.indexOf('fox') != -1) {
    console.log('Lion exists')
}
else {
    console.log('Fox doent exists');
}
// includs 
if (friends.includes('Limon') == true) {
    console.log('Limon exits ')
}

// concat
const first = [1, 2, 3, 4];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);

