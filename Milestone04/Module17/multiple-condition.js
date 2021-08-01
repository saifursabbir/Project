var gotJob = true;
var monySaved = 250000;
var hasFlat = true;
var hasHouse = false;

// if (gotJob == true && monySaved > 200000) {
//     console.log('Cholo biye kore feli !!');
// }
// else {
//     console.log('Tor kopale biya naii!!')
// }


// if (gotJob == true && monySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biye kore feli !!');
// }
// else {
//     console.log('Tor kopale biya naii!!')
// }


// if (gotJob == true || monySaved > 200000) {
//     console.log('Cholo biye kore feli !!');
// }
// else {
//     console.log('Tor kopale biya naii!!')
// }

if ((gotJob == true && monySaved > 200000) || hasHouse == true) {
    console.log('Cholo biye kore feli !!');
}
else {
    console.log('Tor kopale biya naii!!')
}