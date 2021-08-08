var color = 'yellow';

if (color == 'blue') {
    console.log('color is blue');
}
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
else {
    console.log('color is black');
}

switch (color) {
    case 'blue':
        console.log('color is blue')
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'yellow':
        console.log('color is yellow')
        break;
    default:
        console.log('color is black');
}