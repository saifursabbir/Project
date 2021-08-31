const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '017127350000', address: 'Chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const drees = fish.dress;
// const id = fish.id;

const { phone, price, drees, id } = { id: 58, name: 'king hilsha', price: 9000, phone: '017127350000', address: 'Chandpur', dress: 'silver' };
// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, drees);
// console.log(phone, phone);

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
}
// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.CEO;
const { second, third } = company.web.tech;
console.log(work, framework, food,);
