function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log(feet);

var nanaInches = 240;
var feet = inchToFeet(nanaInches);
console.log(feet);


// mile to km 
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);