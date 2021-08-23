const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB cemera flash light phone',
    'yellow laptop with black laptop',
    'Dell purple color phone with laptop',
    'HTC low price Phone',
    'Dell 1X59 Lenovo commercial yoga laptop',
];
// const searching = 'laptop';
const searching = 'Dell';

// indexOff
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}
// console.log(output);

for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product)
    }
}
// console.log(output);

// starts with 
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);



