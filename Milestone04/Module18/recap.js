//variable
var favoriteBook = '4 Hour work week';

//Array
var bookList = ['positioning', 'hooked', 'strat with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('small Giants');
bookList.pop();

// conditionals 
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
}
else {
    console.log('I am Not hooked');
}
//while loop 
var i = 0;
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

//for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}