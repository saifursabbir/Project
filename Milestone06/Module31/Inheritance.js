class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

};

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address); +
            this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a suppport session')
    }
};
class StudentCare extends TeamMember {
    designation = 'Care Web Dev'
    bulidARoutine(student) {
        console.log(this.name, 'Build a routine', student)
    }
};
class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune app Dev'
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
};

const amir = new Support('amir khan', 'BD', 7);
const salman = new Support('salman khan', 'UK', 4);
const sharuk = new Support('SRK', 'USA', 9);

const alia = new StudentCare('Alia Bhatt', 'Mumbai', 11);
const ash = new NeptuneDev('Ash', 'Dhelli', 'Android studio');
ash.releaseApp('1.2.40')
console.log(alia);