const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    treatDey: function (expense, bokish) {
        this.money = this.money - expense - bokish;
        console.log(this);
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam',
}
const normalGolam = {
    id: 103,
    money: 6000,
    name: 'normal Golam',
}
//call
// kibria.treatDey.call(heroBalam, 500, 400);
// kibria.treatDey.call(heroBalam, 500, 500)

kibria.treatDey.apply(heroBalam, [500, 100]);
kibria.treatDey.apply(heroBalam, [1500, 600]);

kibria.treatDey.apply(normalGolam, [700, 300]);