const priya = 'asif Akbar';
const meye = "meye tumi ki dukhho chino";
const kobita = `kobita tumi sopno charini`;

const multiLineNew = ` this is multi line
this is second line
this is third line
`
// console.log(multiLineNew);

const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
// const old2 = ' <h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = ` <h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'mamun';
const last = 'Chowdury';
const fullOld = first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}.Has Money ${friends.length * 500}. He lives in Dhaka.`;

// console.log(fullNew);

const name = 'Hero';
const greetings = 'Welcome Home!' + ' ' + name;
const greetings = `welcome Home! ${name}`;
console.log(greetings);