var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// Array 
var partners = ['sajid', 'mojid', 'sabbir', 'lajit'];
var elementCount = partners.length;
var sajidIndex = partners.indexOf('sabbir');
partners.push();
partners.pop();

// conditionals 

if (bookPrice < 120) {
    console.log('I will buy this book');
}
else {
    console.log('Mama, kisu discount den na');
}

// while loop / for loop
var i = 0;
while (i <= 17) {
    // do some work
    i++;
}

for (var i = 0; i < 17; i++) {

}

//function 
function isMonUp() {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return true;
}

var moonStatus = isMonUp(21);

// let const 

// value of variable could Change 
var price = 27;
price = 45;
price = 78;

/// value of the variable will not Change
const myName = 'lal e lal mr. Helal';
console.log(myName);
myName = 99;
