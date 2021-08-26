class Support {
    name;
    role = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a suppport session')
    }
};
const amir = new Support('amir khan', 'BD');
const salman = new Support('salman khan', 'UK');
const sharuk = new Support('SRK', 'USA');
amir.startSession();
salman.startSession();
console.log(amir, salman, sharuk);