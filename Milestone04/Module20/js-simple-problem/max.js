const business = 450;
const minister = 550;
const army = 600;


/*if (business > minister) {
    console.log('Business person er pola is bigger');
}
else {
    console.log('minister er pola is bigger');
}*/


function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const larger = findLargest(154, 241);
console.log('largest is', larger);

// compare 3
/*
if (business > minister && business > army) {
    console.log('Businees is Bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger')
}
else (army > business && army > minister) {
    console.log('army is bigger')
}*/


// var max = Math.max(business, minister, army);
// console.log('largest is', max);