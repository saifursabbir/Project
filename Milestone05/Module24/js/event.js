function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue buttton click by setting function name 
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// handle event using anonymous function 
const greenButton = document.getElementById('make-green-button');
// console.log(greenButton);
// anonymous function
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// handle by using add eventlisente 
const goldenButton = document.getElementById('make-GoldenRod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEvenListener 
const hotPinkButton = document.getElementById('Make-Hotpink');
hotPinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = '';
})

