/*
Data Types
//-- primitive data types --\\
1. Number
2. String
3. Boolean
4. undefined
5. null
7. symbol
//-- non-primitive data types --\\ 
6. Object
*/

let a = 'hello'
let b = a;
console.log(a, b)
a = 'gello'
console.log(a, b)


const x = { job: 'web devoloper' }
const y = x;
console.log(x, y)
// x.job = 'font end devoloper'
x.job = 'font end devoloper'

console.log(x, y)