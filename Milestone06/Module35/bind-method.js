const kibria = {
    id: 101,
    money: 5000,
    name: 'Rj kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
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



const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(600);
kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(500)