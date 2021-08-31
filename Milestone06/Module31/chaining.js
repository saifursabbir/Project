// declare variable based on the name of an object property.
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
// console.log('myObject.p', myObject?.p?.q);

// destructuring array
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);
//
const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);

const { sky, color, mony } = { sky: 'blue', soli: 'matti', color: 'red', mony: 500 };

// chaining
const company = {
    name: 'GP',
    CEO: { id: 58, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development', employee: 22, framework: 'react',
        tech: {
            first: 'html',
            second: 'CSS',
            third: 'js'
        }
    }
};
console.log(company?.web?.tech?.third);
console.log(company?.backend?.tech.third);


